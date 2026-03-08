import { Link } from "react-router-dom";

const Footer = () => {
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
              Premium 100% virgin hair extensions, bundles, wigs & frontals. Luxury quality for the modern woman.
            </p>
            
            <div className="space-y-2 text-sm font-body text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-1">Contact</p>
                <p>info@nayahair.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1 mt-3">Hours</p>
                <p>Mon–Fri: 9AM – 6PM</p>
                <p>Sat: 10AM – 4PM</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-body font-medium mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><Link to="/category/bundles" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Bundles</Link></li>
                <li><Link to="/category/wigs" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Wigs</Link></li>
                <li><Link to="/category/frontals" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Frontals</Link></li>
                <li><Link to="/category/closures" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Closures</Link></li>
                <li><Link to="/category/clip-ins" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Clip-Ins</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-body font-medium mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/about/size-guide" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Length Guide</Link></li>
                <li><Link to="/about/hair-care-guide" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Hair Care</Link></li>
                <li><Link to="/terms-of-service" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Return Policy</Link></li>
                <li><Link to="/about/customer-care" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Shipping Info</Link></li>
                <li><Link to="/about/customer-care" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-body font-medium mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">TikTok</a></li>
                <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">YouTube</a></li>
                <li><a href="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border -mx-6 px-6 pt-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-body text-muted-foreground mb-1 md:mb-0">
            © 2024 Naya Hair Extensions. All rights reserved. Template made by{" "}
            <a href="https://www.liljeros.co" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline">
              Rickard Liljeros
            </a>
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm font-body text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
