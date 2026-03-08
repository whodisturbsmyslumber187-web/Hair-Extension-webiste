import { ArrowRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShoppingBag from "./ShoppingBag";
import LanguageSelector from "./LanguageSelector";
import MusicPlayer from "./MusicPlayer";
import ThemeSelector from "./ThemeSelector";
import hairBundlesStraight from "@/assets/hair-bundles-straight.jpg";
import hairBundlesBodywave from "@/assets/hair-bundles-bodywave.jpg";
import hairFrontal from "@/assets/hair-frontal.jpg";
import hairWigBlonde from "@/assets/hair-wig-blonde.jpg";
import hairClosure from "@/assets/hair-closure.jpg";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  category: string;
}

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [offCanvasType, setOffCanvasType] = useState<'favorites' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false);
  
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Straight Virgin Bundles 20\"",
      price: "$85",
      image: hairBundlesStraight,
      quantity: 2,
      category: "Bundles"
    },
    {
      id: 5,
      name: "613 Blonde Wig 24\"",
      price: "$285",
      image: hairWigBlonde,
      quantity: 1,
      category: "Wigs"
    },
  ]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items => 
        items.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const popularSearches = [
    "Straight Bundles",
    "Body Wave",
    "613 Blonde Wig",
    "Lace Frontal",
    "Clip-In Extensions",
    "Deep Wave Bundles"
  ];
  
  const navItems = [
    { 
      name: "Shop", 
      href: "/category/all",
      submenuItems: [
        "Bundles",
        "Wigs", 
        "Frontals",
        "Closures",
        "Clip-Ins",
        "Extensions",
        "Tape-Ins",
      ],
      images: [
        { src: hairBundlesStraight, alt: "Virgin Hair Bundles", label: "Bundles" },
        { src: hairWigBlonde, alt: "Lace Wigs", label: "Wigs" }
      ]
    },
    {
      name: "Bundle Deals",
      href: "/bundle-deal",
      submenuItems: [
        "3 Bundle + Closure",
        "4 Bundle + Frontal",
        "Custom Bundle",
      ],
      images: [
        { src: hairBundlesBodywave, alt: "Bundle Deals", label: "Save up to 20%" }
      ]
    },
    { 
      name: "New In", 
      href: "/category/new-in",
      submenuItems: [
        "Straight Bundles",
        "Deep Wave Bundles",
        "Blonde Bundles",
        "HD Lace Closures",
        "613 Blonde Wigs",
      ],
      images: [
        { src: hairBundlesBodywave, alt: "Body Wave Bundles", label: "Body Wave" },
        { src: hairFrontal, alt: "Lace Frontal", label: "Frontals" }
      ]
    },
    { 
      name: "About", 
      href: "/about/our-story",
      submenuItems: [
        "Our Story",
        "Hair Care Guide",
        "Size Guide",
        "Customer Care",
        "Store Locator"
      ],
      images: [
        { src: hairClosure, alt: "Premium Hair", label: "Our quality promise" }
      ]
    }
  ];

  return (
    <nav 
      className="relative" 
      style={{
        backgroundColor: 'hsla(20, 33%, 98%, 0.92)',
        backdropFilter: 'blur(12px)'
      }}
    >
      <div className="flex items-center justify-between h-16 px-6">
        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 mt-0.5 text-nav-foreground hover:text-nav-hover transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 relative">
            <span className={`absolute block w-5 h-px bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-2.5' : 'top-1.5'}`}></span>
            <span className={`absolute block w-5 h-px bg-current transform transition-all duration-300 top-2.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute block w-5 h-px bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-2.5' : 'top-3.5'}`}></span>
          </div>
        </button>

        {/* Left navigation */}
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.href}
                className="text-nav-foreground hover:text-nav-hover transition-colors duration-200 text-sm font-body tracking-wide py-6 block"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="block">
            <span className="text-xl tracking-[0.2em] font-semibold text-foreground" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              NAYA
            </span>
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center space-x-1">
          <ThemeSelector />
          <MusicPlayer />
          <LanguageSelector />
          <button 
            className="p-2 text-nav-foreground hover:text-nav-hover transition-colors duration-200"
            aria-label="Search"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          <button 
            className="hidden lg:block p-2 text-nav-foreground hover:text-nav-hover transition-colors duration-200"
            aria-label="Favorites"
            onClick={() => setOffCanvasType('favorites')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
          <button 
            className="p-2 text-nav-foreground hover:text-nav-hover transition-colors duration-200 relative"
            aria-label="Shopping bag"
            onClick={() => setIsShoppingBagOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[30%] text-[0.5rem] font-semibold font-body text-foreground pointer-events-none">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Full width dropdown */}
      {activeDropdown && (
        <div 
          className="absolute top-full left-0 right-0 bg-card border-b border-border z-50"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="px-6 py-8">
            <div className="flex justify-between w-full">
              <div className="flex-1">
                <ul className="space-y-2">
                  {navItems
                    .find(item => item.name === activeDropdown)
                    ?.submenuItems.map((subItem, index) => {
                    let linkTo = "";
                    if (activeDropdown === "About") {
                      linkTo = `/about/${subItem.toLowerCase().replace(/\s+/g, '-')}`;
                    } else if (activeDropdown === "Bundle Deals") {
                      if (subItem === "3 Bundle + Closure") linkTo = "/bundle-deal?preset=3-closure";
                      else if (subItem === "4 Bundle + Frontal") linkTo = "/bundle-deal?preset=4-frontal";
                      else linkTo = "/bundle-deal";
                    } else {
                      linkTo = `/category/${subItem.toLowerCase().replace(/\s+/g, '-')}`;
                    }
                    return (
                    <li key={index}>
                      <Link 
                        to={linkTo}
                        className="text-nav-foreground hover:text-nav-hover transition-colors duration-200 text-sm font-body tracking-wide block py-2"
                      >
                        {subItem}
                      </Link>
                    </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex space-x-6">
                {navItems
                  .find(item => item.name === activeDropdown)
                  ?.images.map((image, index) => {
                    let linkTo = "/";
                    if (activeDropdown === "Shop") {
                      if (image.label === "Bundles") linkTo = "/category/bundles";
                      else if (image.label === "Wigs") linkTo = "/category/wigs";
                    } else if (activeDropdown === "New In") {
                      linkTo = "/category/new-in";
                    } else if (activeDropdown === "About") {
                      linkTo = "/about/our-story";
                    }
                    return (
                      <Link key={index} to={linkTo} className="w-[400px] h-[280px] cursor-pointer group relative overflow-hidden block">
                        <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-90" />
                        <div className="absolute bottom-2 left-2 text-foreground bg-card/80 px-2 py-1 text-xs font-body tracking-wide flex items-center gap-1">
                          <span>{image.label}</span>
                          <ArrowRight size={12} />
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-card border-b border-border z-50">
          <div className="px-6 py-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-8">
                <div className="flex items-center border-b border-border pb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-muted-foreground mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search for hair extensions..."
                    className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-lg font-body"
                    autoFocus
                  />
                </div>
              </div>
              <div>
                <h3 className="text-foreground text-sm font-body tracking-wide mb-4">Popular Searches</h3>
                <div className="flex flex-wrap gap-3">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      className="text-foreground hover:text-primary text-sm font-body py-2 px-4 border border-border rounded-full transition-colors duration-200 hover:border-primary"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border z-50">
          <div className="px-6 py-8">
            <div className="space-y-6">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 text-lg font-light block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  <div className="mt-3 pl-4 space-y-2">
                    {item.submenuItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={item.name === "About" ? `/about/${subItem.toLowerCase().replace(/\s+/g, '-')}` : `/category/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-muted-foreground hover:text-primary text-sm font-body block py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <ShoppingBag 
        isOpen={isShoppingBagOpen}
        onClose={() => setIsShoppingBagOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        onViewFavorites={() => {
          setIsShoppingBagOpen(false);
          setOffCanvasType('favorites');
        }}
      />
      
      {/* Favorites Off-canvas */}
      {offCanvasType === 'favorites' && (
        <div className="fixed inset-0 z-50 h-screen">
          <div className="absolute inset-0 bg-foreground/30 h-screen" onClick={() => setOffCanvasType(null)} />
          <div className="absolute right-0 top-0 h-screen w-96 bg-background border-l border-border animate-slide-in-right flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-lg font-light text-foreground">Your Wishlist</h2>
              <button onClick={() => setOffCanvasType(null)} className="p-2 text-foreground hover:text-muted-foreground transition-colors" aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground text-sm font-body mb-6">
                You haven't added any favorites yet. Browse our collection and click the heart icon to save items you love.
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
