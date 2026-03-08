import hairClosure from "@/assets/hair-closure.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EditorialSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 max-w-[630px]">
          <h2 className="text-2xl md:text-3xl font-light text-foreground leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Your Hair, Your Crown
          </h2>
          <p className="text-sm font-body font-light text-muted-foreground leading-relaxed">
            At Naya, we believe every woman deserves to feel like royalty. Our premium virgin hair is ethically sourced, carefully curated, and quality-tested to ensure you receive nothing but the best. From straight to deep wave, 14" to 40" — we have your perfect match.
          </p>
          <p className="text-sm font-body font-light text-muted-foreground leading-relaxed">
            Each bundle is 100% unprocessed human hair that can be colored, bleached, and heat-styled to create your dream look. No tangling, no shedding — just gorgeous, long-lasting hair.
          </p>
          <Link to="/about/our-story" className="inline-flex items-center gap-1 text-sm font-body text-primary hover:text-primary-hover transition-colors duration-200">
            <span>Learn more about our quality</span>
            <ArrowRight size={12} />
          </Link>
        </div>
        
        <div className="order-first md:order-last">
          <div className="w-full aspect-square overflow-hidden">
            <img src={hairClosure} alt="Premium lace closure" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
