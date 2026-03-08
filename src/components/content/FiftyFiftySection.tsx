import hairBundlesStraight from "@/assets/hair-bundles-straight.jpg";
import hairBundlesBodywave from "@/assets/hair-bundles-bodywave.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FiftyFiftySection = () => {
  const { t } = useTranslation();

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
              {t("fiftyFifty.title1")}
            </h3>
            <p className="text-sm font-body font-light text-muted-foreground">
              {t("fiftyFifty.subtitle1")}
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
              {t("fiftyFifty.title2")}
            </h3>
            <p className="text-sm font-body font-light text-muted-foreground">
              {t("fiftyFifty.subtitle2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;
