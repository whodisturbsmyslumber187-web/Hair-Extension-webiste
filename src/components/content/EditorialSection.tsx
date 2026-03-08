import hairClosure from "@/assets/hair-closure.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EditorialSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 max-w-[630px]">
          <h2 className="text-2xl md:text-3xl font-light text-foreground leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {t("editorial.title")}
          </h2>
          <p className="text-sm font-body font-light text-muted-foreground leading-relaxed">
            {t("editorial.subtitle")}
          </p>
          <Link to="/about/our-story" className="inline-flex items-center gap-1 text-sm font-body text-primary hover:text-primary-hover transition-colors duration-200">
            <span>{t("about.ourStory")}</span>
            <ArrowRight size={12} className="rtl:rotate-180" />
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
