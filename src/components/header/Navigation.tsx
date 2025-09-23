import { Search, User, ShoppingBag } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { name: "Shop", href: "/shop" },
    { name: "Support", href: "/support" },
    { name: "About", href: "/about" }
  ];

  return (
    <nav className="bg-nav border-b border-border">
      <div className="flex items-center justify-between h-16 px-6">
          {/* Left navigation */}
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-nav-foreground hover:text-nav-hover transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="/" className="text-2xl font-light tracking-wider text-foreground">
              LINEA
            </a>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 text-nav-foreground hover:text-nav-hover transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button 
              className="p-2 text-nav-foreground hover:text-nav-hover transition-colors duration-200"
              aria-label="Account"
            >
              <User size={20} />
            </button>
            <button 
              className="p-2 text-nav-foreground hover:text-nav-hover transition-colors duration-200 relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag size={20} />
            </button>
          </div>
      </div>
    </nav>
  );
};

export default Navigation;