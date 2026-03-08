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
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, confirmationNumber } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // If a confirmation number is provided, look up the order
    let orderContext = "";
    if (confirmationNumber) {
      const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
      const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { data: order } = await supabase
        .from("orders")
        .select("*, order_updates(*)")
        .eq("confirmation_number", confirmationNumber.toUpperCase())
        .maybeSingle();

      if (order) {
        orderContext = `\n\nORDER FOUND:
- Confirmation: ${order.confirmation_number}
- Status: ${order.status}
- Customer: ${order.customer_name || "N/A"}
- Total: $${order.total}
- Items: ${JSON.stringify(order.items)}
- Tracking: ${order.tracking_number || "Not yet available"}
- Estimated Delivery: ${order.estimated_delivery || "4-6 weeks from order date"}
- Order Date: ${order.created_at}
${order.order_updates?.length ? `\nTracking Updates:\n${order.order_updates.map((u: any) => `- ${u.created_at}: ${u.status} - ${u.message}`).join("\n")}` : ""}`;
      } else {
        orderContext = `\n\nNo order found with confirmation number "${confirmationNumber}". Ask the customer to double-check the number.`;
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
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
