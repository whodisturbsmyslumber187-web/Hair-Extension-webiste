import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-card text-foreground pt-8 pb-2 px-6 border-t border-border mt-48">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl tracking-[0.2em] font-semibold mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              NAYA
            </h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed max-w-md mb-6">
              {t("footer.tagline")}
            </p>
            
            <div className="space-y-2 text-sm font-body text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-1">{t("footer.contact")}</p>
                <p>info@nayahair.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1 mt-3">{t("footer.hours")}</p>
                <p>{t("footer.monFri")}</p>
                <p>{t("footer.sat")}</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-body font-medium mb-4">{t("footer.shop")}</h4>
              <ul className="space-y-2">
                <li><Link to="/category/bundles" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t("categories.bundles")}</Link></li>
                <li><Link to="/category/wigs" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t("categories.wigs")}</Link></li>
                <li><Link to="/category/frontals" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t("categories.frontals")}</Link></li>
                <li><Link to="/category/closures" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t("categories.closures")}</Link></li>
                <li><Link to="/category/clip-ins" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t("categories.clipIns")}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-body font-medium mb-4">{t("footer.support")}</h4>
              <ul className="space-y-2">
                <li><Link to="/about/size-guide" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t("footer.lengthGuide")}</Link></li>
                <li><Link to="/about/hair-care-guide" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t("footer.hairCare")}</Link></li>
                <li><Link to="/about/customer-care" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t("footer.returnsExchanges")}</Link></li>
                <li><Link to="/about/customer-care" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t("footer.shippingInfo")}</Link></li>
                <li><Link to="/about/customer-care" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t("footer.contactUs")}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-body font-medium mb-4">{t("footer.connect")}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t("footer.instagram")}</a></li>
                <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t("footer.tiktok")}</a></li>
                <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t("footer.youtube")}</a></li>
                <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">{t("footer.newsletter")}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border -mx-6 px-6 pt-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-body text-muted-foreground mb-1 md:mb-0">
            © 2024 Naya Hair Extensions. {t("footer.allRightsReserved")}{" "}
            <a href="https://www.liljeros.co" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline">
              Rickard Liljeros
            </a>
          </p>
          <div className="flex space-x-6 rtl:space-x-reverse">
            <Link to="/privacy-policy" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">
              {t("footer.privacyPolicy")}
            </Link>
            <Link to="/terms-of-service" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">
              {t("footer.termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
