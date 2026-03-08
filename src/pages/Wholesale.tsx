import { useState } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Package, DollarSign, Truck, Users, Crown, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

const pricingTiers = [
  {
    name: "Starter",
    minOrder: "10 units",
    discount: "15% off retail",
    description: "Perfect for new salon owners testing our products",
    features: ["Free color swatches", "Standard shipping", "Email support"],
  },
  {
    name: "Professional",
    minOrder: "25 units",
    discount: "25% off retail",
    description: "Most popular for established salons",
    features: ["Priority shipping", "Dedicated account manager", "Marketing materials", "Custom packaging available"],
    highlighted: true,
  },
  {
    name: "Elite",
    minOrder: "50+ units",
    discount: "35% off retail",
    description: "For large-scale resellers and distributors",
    features: ["Free expedited shipping", "Private labeling", "Exclusive early access", "Custom formulations", "Co-marketing opportunities"],
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

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.contactName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    toast.success("Application submitted! We'll be in touch within 24 hours.");
    setFormData({ businessName: "", contactName: "", email: "", phone: "", businessType: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-24 md:py-32 px-6 text-center bg-gradient-to-b from-secondary to-background">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">Partner With Us</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Wholesale Program
          </h1>
          <p className="text-lg text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
            Premium virgin hair at unbeatable bulk prices. Join hundreds of salons and resellers who trust Naya for quality and consistency.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Why Partner With Naya
          </h2>
          <p className="text-muted-foreground text-center font-body mb-14 max-w-lg mx-auto">
            Everything you need to grow your hair business with confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <b.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Pricing Tiers
          </h2>
          <p className="text-muted-foreground text-center font-body mb-14 max-w-lg mx-auto">
            Volume-based discounts that scale with your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-8 rounded-xl border bg-card flex flex-col ${
                  tier.highlighted ? "border-primary shadow-xl ring-1 ring-primary/20 scale-[1.02]" : "border-border"
                }`}
              >
                {tier.highlighted && (
                  <span className="text-xs tracking-widest uppercase text-primary font-body mb-2">Most Popular</span>
                )}
                <h3 className="text-2xl font-semibold mb-1" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  {tier.name}
                </h3>
                <p className="text-2xl font-bold text-primary mb-2">{tier.discount}</p>
                <p className="text-sm text-muted-foreground font-body mb-1">Min. order: {tier.minOrder}</p>
                <p className="text-sm text-muted-foreground font-body mb-6">{tier.description}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="text-sm font-body flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
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
        </div>
      </section>

      {/* Application Form */}
      <section id="wholesale-form" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Apply for Wholesale
          </h2>
          <p className="text-muted-foreground text-center font-body mb-12">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name *</Label>
                <Input id="businessName" value={formData.businessName} onChange={(e) => handleChange("businessName", e.target.value)} placeholder="Your salon or business name" maxLength={100} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactName">Contact Name *</Label>
                <Input id="contactName" value={formData.contactName} onChange={(e) => handleChange("contactName", e.target.value)} placeholder="Full name" maxLength={100} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="you@business.com" maxLength={255} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+1 (555) 000-0000" maxLength={20} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessType">Business Type</Label>
              <Input id="businessType" value={formData.businessType} onChange={(e) => handleChange("businessType", e.target.value)} placeholder="e.g. Hair Salon, Beauty Supply Store, Online Reseller" maxLength={100} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Tell us about your business</Label>
              <Textarea id="message" value={formData.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="How many units do you typically order? What textures are you interested in?" rows={5} maxLength={1000} />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Wholesale Application"}
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wholesale;
