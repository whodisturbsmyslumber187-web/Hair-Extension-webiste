import hairFrontal from "@/assets/hair-frontal.jpg";
import hairWigBlonde from "@/assets/hair-wig-blonde.jpg";
import { Link } from "react-router-dom";

const OneThirdTwoThirdsSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Link to="/category/frontals" className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden">
              <img 
                src={hairFrontal} 
                alt="HD lace frontal" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div>
            <h3 className="text-sm font-body font-medium text-foreground mb-1">
              Lace Frontals
            </h3>
            <p className="text-sm font-body font-light text-muted-foreground">
              HD lace for the most natural, undetectable hairline
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Link to="/category/wigs" className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden">
              <img 
                src={hairWigBlonde} 
                alt="613 blonde lace wig" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div>
            <h3 className="text-sm font-body font-medium text-foreground mb-1">
              Blonde Collection
            </h3>
            <p className="text-sm font-body font-light text-muted-foreground">
              613 & honey blonde wigs and bundles — ready to tone
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneThirdTwoThirdsSection;
