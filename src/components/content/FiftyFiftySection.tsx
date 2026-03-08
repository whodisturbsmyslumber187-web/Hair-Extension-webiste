import hairBundlesStraight from "@/assets/hair-bundles-straight.jpg";
import hairBundlesBodywave from "@/assets/hair-bundles-bodywave.jpg";
import { Link } from "react-router-dom";

const FiftyFiftySection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Link to="/category/bundles" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={hairBundlesStraight} 
                alt="Straight virgin hair bundles" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div>
            <h3 className="text-sm font-body font-medium text-foreground mb-1">
              Virgin Bundles
            </h3>
            <p className="text-sm font-body font-light text-muted-foreground">
              100% unprocessed human hair, 14" to 40" in all textures
            </p>
          </div>
        </div>

        <div>
          <Link to="/category/wigs" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={hairBundlesBodywave} 
                alt="Body wave hair bundles" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div>
            <h3 className="text-sm font-body font-medium text-foreground mb-1">
              Body Wave Collection
            </h3>
            <p className="text-sm font-body font-light text-muted-foreground">
              Luxurious waves that hold their pattern wash after wash
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;
