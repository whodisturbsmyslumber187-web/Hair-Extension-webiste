import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const generateMathChallenge = () => {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `${a} + ${b}`, answer: a + b };
};

/**
 * Lead capture popup that appears after 8 seconds on site.
 * Also triggers on exit intent (mouse leaves viewport top).
 */
const LeadCapture = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [captcha, setCaptcha] = useState(generateMathChallenge);
  const [captchaInput, setCaptchaInput] = useState("");

  useEffect(() => {
    // Don't show if already dismissed or submitted
    const hasInteracted = localStorage.getItem("naya-lead-captured");
    if (hasInteracted) return;

    // Timer-based popup after 8s
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setIsVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dismissed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    if (parseInt(captchaInput) !== captcha.answer) {
      toast.error("Incorrect answer — please try again");
      setCaptcha(generateMathChallenge());
      setCaptchaInput("");
      return;
    }
    setSubmitted(true);
    localStorage.setItem("naya-lead-captured", "true");
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const handleDismiss = () => {
    setDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={handleDismiss} />

      {/* Modal */}
      <div className="relative bg-card border border-border max-w-md w-full p-8 animate-fade-in z-10 shadow-2xl">
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-light text-foreground mb-2">Wait — Don't Leave Empty-Handed!</h2>
              <p className="text-sm font-body text-muted-foreground">
                Get <strong className="text-primary">15% OFF</strong> your first order when you join our VIP list. 
                Plus, early access to new drops & exclusive deals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-none h-12 font-body"
                required
              />
              <Button type="submit" className="w-full rounded-none h-12 font-body text-base">
                Get My 15% Off
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4 font-body">
              No spam. Unsubscribe anytime.
            </p>

            <button
              onClick={handleDismiss}
              className="block mx-auto mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors font-body underline"
            >
              No thanks, I'll pay full price
            </button>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl font-light text-foreground mb-2">You're In! 🎉</h2>
            <p className="text-sm font-body text-muted-foreground">
              Check your inbox for your exclusive 15% discount code.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadCapture;
