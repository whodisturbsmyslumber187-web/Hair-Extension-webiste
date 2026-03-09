import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.98.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const PRODUCT_CATALOG = `
You are NAYA's customer support assistant. You help customers find hair products and track orders.

PRODUCT CATEGORIES:
- Bundles: Straight, Body Wave, Deep Wave virgin hair bundles (lengths 12"-30", weights 100g-300g+)
- Wigs: HD lace wigs including 613 blonde, body wave styles
- Frontals: Lace frontals (13x4, 13x6) for seamless hairlines
- Closures: Lace closures (4x4, 5x5) to complete installs
- Clip-Ins: Instant volume extensions, no commitment
- Extensions: Tape-ins, I-tips, ponytails
- Tape-Ins: Seamless tape-in extensions

COLORS AVAILABLE: Natural Black, #1B, Dark Brown, Honey Blonde, 613 Blonde, Burgundy, Golden Brown, Ombre

SHIPPING: All orders take 4-6 weeks depending on supply.

HAIR CARE: Hair longevity depends on how the customer treats it — using sulfate-free products, silk pillowcases, avoiding excessive heat.

BUNDLE DEALS: 3 Bundle + Closure, 4 Bundle + Frontal, Custom Bundle (save up to 20%)

CONTACT: WhatsApp or Instagram DM for virtual consultations.

When customers ask about orders, ask for their confirmation number and look it up.
Keep responses friendly, concise, and helpful. Use markdown formatting for readability.
IMPORTANT: Never reveal full customer names or detailed personal information. Only provide order status and tracking info.
`;

const MAX_MESSAGES = 20;
const MAX_MSG_LENGTH = 4000;
const VALID_ROLES = ["user", "assistant"];
const CONFIRMATION_PATTERN = /^[A-Z0-9-]{3,30}$/i;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    // --- Auth: validate the anon key ---
    const authHeader = req.headers.get("Authorization");
    const expectedKey = Deno.env.get("SUPABASE_ANON_KEY");
    if (!authHeader || authHeader !== `Bearer ${expectedKey}`) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // --- Persistent rate limiting using database ---
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";
    
    const { data: isLimited, error: rateLimitError } = await supabase.rpc("check_rate_limit", {
      p_identifier: clientIp,
      p_endpoint: "chat",
      p_max_requests: 20,
      p_window_minutes: 1
    });

    if (rateLimitError) {
      console.error("Rate limit check error:", rateLimitError);
    }

    if (isLimited === true) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please wait a moment." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { messages, confirmationNumber } = await req.json();

    // --- Input validation ---
    if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) {
      return new Response(
        JSON.stringify({ error: "Invalid messages: must be an array of 1-20 messages" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    for (const msg of messages) {
      if (typeof msg.content !== "string" || msg.content.length > MAX_MSG_LENGTH) {
        return new Response(
          JSON.stringify({ error: `Each message must be a string of at most ${MAX_MSG_LENGTH} characters` }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (!VALID_ROLES.includes(msg.role)) {
        return new Response(
          JSON.stringify({ error: "Invalid message role" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // Validate confirmation number format if provided
    if (confirmationNumber !== undefined && confirmationNumber !== null) {
      if (typeof confirmationNumber !== "string" || !CONFIRMATION_PATTERN.test(confirmationNumber)) {
        return new Response(
          JSON.stringify({ error: "Invalid confirmation number format" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // If a confirmation number is provided, look up the order
    // Only expose non-PII data: status, tracking, estimated delivery
    let orderContext = "";
    if (confirmationNumber) {
      const { data: order } = await supabase
        .from("orders")
        .select("confirmation_number, status, tracking_number, estimated_delivery, created_at, order_updates(status, message, created_at)")
        .eq("confirmation_number", confirmationNumber.toUpperCase())
        .maybeSingle();

      if (order) {
        // Build a summary of items without exposing full details
        const latestUpdate = order.order_updates?.length 
          ? order.order_updates.sort((a: any, b: any) => 
              new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
            )[0]
          : null;

        orderContext = `\n\nORDER FOUND:
- Confirmation: ${order.confirmation_number}
- Status: ${order.status}
- Tracking Number: ${order.tracking_number || "Not yet available"}
- Estimated Delivery: ${order.estimated_delivery || "4-6 weeks from order date"}
- Order Date: ${new Date(order.created_at).toLocaleDateString()}
${latestUpdate ? `- Latest Update: ${latestUpdate.status} - ${latestUpdate.message}` : ""}

Note: For privacy, we don't display full customer details. If they need to verify identity, ask them to contact support directly.`;
      } else {
        orderContext = `\n\nNo order found with confirmation number "${confirmationNumber}". Ask the customer to double-check the number or contact support.`;
      }
    }

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: PRODUCT_CATALOG + orderContext },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "We're experiencing high traffic. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
