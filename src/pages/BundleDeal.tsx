import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Button } from "@/components/ui/button";
import { Check, Package, Sparkles, ArrowRight } from "lucide-react";
import { products } from "@/data/products";

type TextureType = "Straight" | "Body Wave" | "Deep Wave";
type ClosureType = "none" | "closure" | "frontal";

const BundleDeal = () => {
  useEffect(() => {
    document.title = "Bundle Deals - Naya Hair Extensions";
  }, []);

  const [texture, setTexture] = useState<TextureType>("Straight");
  const [length, setLength] = useState('20"');
  const [bundleCount, setBundleCount] = useState(3);
  const [closureType, setClosureType] = useState<ClosureType>("closure");
  const [closureLength, setClosureLength] = useState('16"');

  const bundles = products.filter(p => p.category === "Bundles");
  const closures = products.filter(p => p.category === "Closures");
  const frontals = products.filter(p => p.category === "Frontals");

  const selectedBundle = bundles.find(p => p.subcategory === texture) || bundles[0];
  const selectedClosure = closures[0];
  const selectedFrontal = frontals[0];

  const lengths = ["14\"", "16\"", "18\"", "20\"", "22\"", "24\"", "26\"", "28\"", "30\""];
  const closureLengths = ["12\"", "14\"", "16\"", "18\"", "20\""];

  // Pricing
  const bundleLengthIdx = lengths.indexOf(length);
  const bundleBasePrice = selectedBundle.priceNum + (bundleLengthIdx > 0 ? bundleLengthIdx * 6 : 0);
  const bundleTotalBeforeDiscount = bundleBasePrice * bundleCount;

  const closureLengthIdx = closureLengths.indexOf(closureLength);
  const closurePrice = closureType === "closure"
    ? (selectedClosure?.priceNum || 80) + (closureLengthIdx > 0 ? closureLengthIdx * 5 : 0)
    : closureType === "frontal"
      ? (selectedFrontal?.priceNum || 100) + (closureLengthIdx > 0 ? closureLengthIdx * 8 : 0)
      : 0;

  // Bundle deal discount
  const bundleDiscount = bundleCount >= 4 ? 0.20 : bundleCount >= 3 ? 0.15 : 0.10;
  const closureDiscount = closureType !== "none" ? 0.10 : 0;

  const discountedBundleTotal = Math.round(bundleTotalBeforeDiscount * (1 - bundleDiscount));
  const discountedClosurePrice = Math.round(closurePrice * (1 - closureDiscount));
  const totalPrice = discountedBundleTotal + discountedClosurePrice;
  const totalSavings = (bundleTotalBeforeDiscount + closurePrice) - totalPrice;

  const textures: TextureType[] = ["Straight", "Body Wave", "Deep Wave"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-6">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-body tracking-widest uppercase">Exclusive Bundle Deals</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4">Build Your Perfect Bundle</h1>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Mix and match bundles with a closure or frontal. The more you buy, the more you save.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Builder */}
            <div className="lg:col-span-2 space-y-8">
              {/* Step 1: Texture */}
              <div className="border border-border p-6">
                <h2 className="text-lg font-body font-medium text-foreground mb-1 flex items-center gap-2">
                  <span className="w-7 h-7 bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                  Choose Your Texture
                </h2>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {textures.map(t => (
                    <button
                      key={t}
                      onClick={() => setTexture(t)}
                      className={`p-4 border text-center transition-all font-body text-sm ${
                        texture === t ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground hover:border-primary/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Length */}
              <div className="border border-border p-6">
                <h2 className="text-lg font-body font-medium text-foreground mb-1 flex items-center gap-2">
                  <span className="w-7 h-7 bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                  Select Bundle Length
                </h2>
                <div className="flex flex-wrap gap-2 mt-4">
                  {lengths.map(l => (
                    <button
                      key={l}
                      onClick={() => setLength(l)}
                      className={`px-4 py-2 border font-body text-sm transition-all ${
                        length === l ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground hover:border-primary/40"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: How many bundles */}
              <div className="border border-border p-6">
                <h2 className="text-lg font-body font-medium text-foreground mb-1 flex items-center gap-2">
                  <span className="w-7 h-7 bg-primary text-primary-foreground flex items-center justify-center text-sm">3</span>
                  Number of Bundles
                </h2>
                <div className="grid grid-cols-4 gap-3 mt-4">
                  {[2, 3, 4, 5].map(n => (
                    <button
                      key={n}
                      onClick={() => setBundleCount(n)}
                      className={`p-4 border text-center transition-all font-body ${
                        bundleCount === n ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                      }`}
                    >
                      <span className="text-2xl font-light text-foreground">{n}</span>
                      <p className="text-xs text-muted-foreground mt-1">
                        {n >= 4 ? "20% off" : n >= 3 ? "15% off" : "10% off"}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Closure/Frontal */}
              <div className="border border-border p-6">
                <h2 className="text-lg font-body font-medium text-foreground mb-1 flex items-center gap-2">
                  <span className="w-7 h-7 bg-primary text-primary-foreground flex items-center justify-center text-sm">4</span>
                  Add Closure or Frontal
                </h2>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {([
                    { key: "none" as ClosureType, label: "No Thanks" },
                    { key: "closure" as ClosureType, label: "HD Lace Closure" },
                    { key: "frontal" as ClosureType, label: "Lace Frontal" },
                  ]).map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => setClosureType(opt.key)}
                      className={`p-4 border text-center transition-all font-body text-sm ${
                        closureType === opt.key ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground hover:border-primary/40"
                      }`}
                    >
                      {opt.label}
                      {opt.key !== "none" && <p className="text-xs text-primary mt-1">10% off with bundle</p>}
                    </button>
                  ))}
                </div>

                {closureType !== "none" && (
                  <div className="mt-4">
                    <p className="text-sm font-body text-muted-foreground mb-2">
                      {closureType === "closure" ? "Closure" : "Frontal"} Length
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {closureLengths.map(l => (
                        <button
                          key={l}
                          onClick={() => setClosureLength(l)}
                          className={`px-3 py-1.5 border font-body text-sm transition-all ${
                            closureLength === l ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground hover:border-primary/40"
                          }`}
                        >
                          {l}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 border border-border p-6 space-y-6 bg-card">
                <h3 className="text-lg font-body font-medium text-foreground flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Your Bundle Deal
                </h3>

                <div className="space-y-4 text-sm font-body">
                  <div className="flex justify-between items-start pb-3 border-b border-border">
                    <div>
                      <p className="text-foreground font-medium">{bundleCount}x {texture} Bundles</p>
                      <p className="text-muted-foreground">{length} · 100g each</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground line-through">${bundleTotalBeforeDiscount}</p>
                      <p className="text-foreground font-medium">${discountedBundleTotal}</p>
                    </div>
                  </div>

                  {closureType !== "none" && (
                    <div className="flex justify-between items-start pb-3 border-b border-border">
                      <div>
                        <p className="text-foreground font-medium">
                          {closureType === "closure" ? "HD Lace Closure" : "Lace Frontal"}
                        </p>
                        <p className="text-muted-foreground">{closureLength}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground line-through">${closurePrice}</p>
                        <p className="text-foreground font-medium">${discountedClosurePrice}</p>
                      </div>
                    </div>
                  )}

                  <div className="bg-primary/10 p-3 flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <p className="text-primary font-medium">You save ${totalSavings}!</p>
                  </div>

                  <div className="flex justify-between text-lg font-medium pt-2">
                    <span className="text-foreground">Total</span>
                    <span className="text-foreground">${totalPrice}</span>
                  </div>
                </div>

                <Button className="w-full rounded-none h-12 text-base font-body">
                  Add Bundle to Cart
                </Button>

                <p className="text-xs text-muted-foreground text-center font-body">
                  All sales are final. No refunds or returns.
                </p>
              </div>
            </div>
          </div>

          {/* Why Bundle CTA */}
          <div className="mt-16 bg-primary/5 border border-primary/20 p-8 md:p-12 text-center">
            <h2 className="text-2xl font-light text-foreground mb-4">Why Buy Bundles?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { title: "Save Up to 20%", desc: "The more bundles you add, the bigger the discount" },
                { title: "Perfect Match", desc: "All bundles from the same donor for consistent texture" },
                { title: "Full Coverage", desc: "3-4 bundles give you the perfect full sew-in look" },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-sm font-body font-medium text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs font-body text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BundleDeal;
