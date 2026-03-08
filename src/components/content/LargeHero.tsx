import hairHero from "@/assets/hair-hero-1.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LargeHero = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full mb-16 px-6">
      <Link to="/category/bundles" className="block">
        <div className="w-full aspect-[16/9] mb-3 overflow-hidden relative group">
          <img 
            src={hairHero} 
            alt="Premium virgin hair extensions on pink satin" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
          <div className="absolute bottom-8 start-8 text-card">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {t("hero.title")}
            </h2>
            <p className="text-sm font-body font-light opacity-90">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default LargeHero;
