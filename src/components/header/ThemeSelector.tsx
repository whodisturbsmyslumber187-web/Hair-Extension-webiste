import { useState, useEffect, useRef } from "react";
import { Palette } from "lucide-react";

export type ThemeKey = "rose-gold" | "black-gold" | "silver-blue" | "opal-green";

interface ThemeOption {
  key: ThemeKey;
  label: string;
  preview: string[];
}

const themes: ThemeOption[] = [
  { key: "rose-gold", label: "Rose Gold", preview: ["#b5736c", "#faf5f3", "#d4956a"] },
  { key: "black-gold", label: "Black & Gold", preview: ["#0a0a0a", "#c9a84c", "#1a1a1a"] },
  { key: "silver-blue", label: "Silver & Blue", preview: ["#0d1b2a", "#708dad", "#c0c0c0"] },
  { key: "opal-green", label: "Opal White & Green", preview: ["#f7f5f0", "#2d6a4f", "#d4cfc4"] },
];

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>(() => {
    return (localStorage.getItem("naya-theme") as ThemeKey) || "rose-gold";
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    applyTheme(currentTheme);
    localStorage.setItem("naya-theme", currentTheme);
  }, [currentTheme]);

  const applyTheme = (theme: ThemeKey) => {
    const root = document.documentElement;
    // Remove all theme classes
    themes.forEach(t => root.classList.remove(`theme-${t.key}`));
    // Add new theme class
    if (theme !== "rose-gold") {
      root.classList.add(`theme-${theme}`);
    }
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-nav-foreground hover:text-nav-hover transition-colors duration-200"
        aria-label="Change theme"
        title="Change theme"
      >
        <Palette className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-card border border-border shadow-xl z-[100] py-2 animate-fade-in">
          <p className="px-4 py-2 text-xs font-body text-muted-foreground tracking-widest uppercase">Theme</p>
          {themes.map(theme => (
            <button
              key={theme.key}
              onClick={() => { setCurrentTheme(theme.key); setIsOpen(false); }}
              className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-accent/50 transition-colors text-left ${
                currentTheme === theme.key ? "bg-accent" : ""
              }`}
            >
              <div className="flex gap-1">
                {theme.preview.map((color, i) => (
                  <span
                    key={i}
                    className="w-4 h-4 rounded-full border border-border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <span className="text-sm font-body text-foreground">{theme.label}</span>
              {currentTheme === theme.key && (
                <span className="ml-auto text-primary text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
