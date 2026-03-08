import { useState, useEffect } from "react";
import { X, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  addedProduct: { name: string; category: string } | null;
}

const UpsellModal = ({ isOpen, onClose, addedProduct }: UpsellModalProps) => {
  const [countdown, setCountdown] = useState(15);

  // Get related products
  const getRecommendations = () => {
    if (!addedProduct) return [];

    const recs: typeof products = [];
    const categories = ["Closures", "Frontals", "Wigs", "Bundles", "Extensions"];

    // If they added bundles, recommend closure/frontal first
    if (addedProduct.category === "Bundles") {
      const closure = products.find(p => p.category === "Closures");
      const frontal = products.find(p => p.category === "Frontals");
      if (closure) recs.push(closure);
      if (frontal) recs.push(frontal);
    }

    // Fill with other categories they haven't bought
    for (const cat of categories) {
      if (recs.length >= 4) break;
      if (cat === addedProduct.category) continue;
      const p = products.find(pr => pr.category === cat && !recs.includes(pr));
      if (p) recs.push(p);
    }

    return recs.slice(0, 4);
  };

  const recommendations = getRecommendations();

  // Countdown timer for urgency
  useEffect(() => {
    if (!isOpen) { setCountdown(15); return; }
    const interval = setInterval(() => {
      setCountdown(c => {
        if (c <= 1) { clearInterval(interval); return 0; }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen || !addedProduct) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-card border border-border max-w-lg w-full animate-fade-in z-10 shadow-2xl">
        {/* Header */}
        <div className="bg-primary/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <span className="font-body text-sm text-foreground font-medium">Added to bag!</span>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Added item confirmation */}
        <div className="px-6 py-4 border-b border-border">
          <p className="text-sm font-body text-muted-foreground">
            <strong className="text-foreground">{addedProduct.name}</strong> has been added to your bag.
          </p>
        </div>

        {/* Upsell section */}
        <div className="px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-body font-medium text-foreground">Complete Your Look</h3>
            {countdown > 0 && (
              <span className="text-xs font-body text-primary bg-primary/10 px-2 py-1">
                🔥 {countdown}s — 10% off if you add now
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {recommendations.map(product => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                onClick={onClose}
                className="group border border-border hover:border-primary/40 transition-all"
              >
                <div className="aspect-square overflow-hidden bg-muted/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs font-body text-foreground truncate">{product.name}</p>
                  <p className="text-xs font-body text-primary mt-0.5">From {product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 pb-6 space-y-2">
          <Link to="/bundle-deal" onClick={onClose}>
            <button className="w-full h-11 border border-primary text-primary font-body text-sm hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
              Build a Bundle Deal — Save Up to 20%
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <Link to="/checkout" onClick={onClose}>
            <button className="w-full h-11 bg-primary text-primary-foreground font-body text-sm hover:bg-primary-hover transition-colors mt-2">
              Checkout Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpsellModal;
