import { useState } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import AboutSidebar from "@/components/about/AboutSidebar";
import PageHeader from "@/components/about/PageHeader";
import ContentSection from "@/components/about/ContentSection";
import WholesaleSlideshow from "@/components/wholesale/WholesaleSlideshow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Package, DollarSign, Truck, Users, Crown, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

const pricingTiers = [
  {
    name: "Starter",
    minOrder: "50–99 units",
    description: "Perfect for new salon owners getting started",
    features: ["Standard shipping rates", "Email support", "Color swatches available"],
  },
  {
    name: "Professional",
    minOrder: "100–199 units",
    description: "Most popular for established salons",
    features: ["Priority shipping", "Dedicated account manager", "Marketing materials", "Custom packaging available"],
    highlighted: true,
  },
  {
    name: "Elite",
    minOrder: "200+ units",
    description: "For large-scale resellers and distributors",
    features: ["Expedited shipping", "Private labeling", "Exclusive early access", "Custom formulations", "Co-marketing opportunities"],
  },
];

const benefits = [
  { icon: DollarSign, title: "Competitive Pricing", description: "Up to 35% off retail with volume-based pricing tiers" },
  { icon: Package, title: "No Minimum Hassle", description: "Start with as few as 10 units to test our quality" },
  { icon: Truck, title: "Fast Fulfillment", description: "Orders ship within 24-48 hours with tracking" },
  { icon: Users, title: "Dedicated Support", description: "Personal account manager for all wholesale partners" },
  { icon: Crown, title: "Premium Quality", description: "100% virgin hair, ethically sourced, grade 12A" },
  { icon: ShieldCheck, title: "Quality Guarantee", description: "30-day quality guarantee on all wholesale orders" },
];

const generateMathChallenge = () => {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `${a} + ${b}`, answer: a + b };
};

const Wholesale = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captcha, setCaptcha] = useState(generateMathChallenge);
  const [captchaInput, setCaptchaInput] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // bot trap
    if (!formData.businessName || !formData.contactName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    if (parseInt(captchaInput) !== captcha.answer) {
      toast.error("Incorrect answer — please try again");
      setCaptcha(generateMathChallenge());
      setCaptchaInput("");
      return;
    }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    toast.success("Application submitted! We'll be in touch within 24 hours.");
    setFormData({ businessName: "", contactName: "", email: "", phone: "", businessType: "", message: "" });
    setCaptcha(generateMathChallenge());
    setCaptchaInput("");
  };

  return (
    <div className="min-h-screen about-text-bold">
      <WholesaleSlideshow />
      <Header />

      <main className="relative flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>

        <div className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader
            title="Wholesale Program"
            subtitle="Premium virgin hair at unbeatable bulk prices — for salons, resellers & distributors"
          />

          {/* Benefits */}
          <ContentSection title="Why Partner With Naya">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="p-6 rounded-xl border border-white/15 bg-black/30 backdrop-blur-sm">
                  <b.icon className="w-8 h-8 mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg mb-2">{b.title}</h3>
                  <p className="text-sm leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </ContentSection>

          {/* Pricing Tiers */}
          <ContentSection title="Pricing Tiers">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`p-8 rounded-xl border bg-black/30 backdrop-blur-sm flex flex-col ${
                    tier.highlighted
                      ? "border-white/40 ring-1 ring-white/20 scale-[1.02]"
                      : "border-white/15"
                  }`}
                >
                  {tier.highlighted && (
                    <span className="text-xs tracking-widest uppercase mb-2">Most Popular</span>
                  )}
                  <h3 className="text-2xl uppercase tracking-wide mb-1">{tier.name}</h3>
                  <p className="text-sm mb-1">Min. order: {tier.minOrder}</p>
                  <p className="text-sm mb-6">{tier.description}</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="text-sm flex items-start gap-2">
                        <span className="mt-0.5">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.highlighted ? "default" : "outline"}
                    className="w-full"
                    onClick={() => document.getElementById("wholesale-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
          </ContentSection>

          {/* Application Form */}
          <ContentSection title="Apply for Wholesale">
            <div id="wholesale-form" className="max-w-2xl">
              <p className="mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input id="businessName" value={formData.businessName} onChange={(e) => handleChange("businessName", e.target.value)} placeholder="Your salon or business name" maxLength={100} className="bg-black/30 border-white/20 backdrop-blur-sm text-white font-bold placeholder:text-white/40" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Name *</Label>
                    <Input id="contactName" value={formData.contactName} onChange={(e) => handleChange("contactName", e.target.value)} placeholder="Full name" maxLength={100} className="bg-black/30 border-white/20 backdrop-blur-sm text-white font-bold placeholder:text-white/40" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="you@business.com" maxLength={255} className="bg-black/30 border-white/20 backdrop-blur-sm text-white font-bold placeholder:text-white/40" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+1 (555) 000-0000" maxLength={20} className="bg-black/30 border-white/20 backdrop-blur-sm text-white font-bold placeholder:text-white/40" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Input id="businessType" value={formData.businessType} onChange={(e) => handleChange("businessType", e.target.value)} placeholder="e.g. Hair Salon, Beauty Supply Store, Online Reseller" maxLength={100} className="bg-black/30 border-white/20 backdrop-blur-sm text-white font-bold placeholder:text-white/40" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your business</Label>
                  <Textarea id="message" value={formData.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="How many units do you typically order? What textures are you interested in?" rows={5} maxLength={1000} className="bg-black/30 border-white/20 backdrop-blur-sm text-white font-bold placeholder:text-white/40" />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Wholesale Application"}
                </Button>
              </form>
            </div>
          </ContentSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Wholesale;
