import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "he", label: "עברית", flag: "🇮🇱" },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-detect language from browser
  useEffect(() => {
    const browserLang = navigator.language?.split("-")[0];
    const supported = languages.find(l => l.code === browserLang);
    if (supported) {
      setCurrentLang(supported.code);
    }
  }, []);

  const current = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 p-2 text-nav-foreground hover:text-nav-hover transition-colors duration-200 text-xs font-body tracking-wide"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 bg-card border border-border shadow-lg z-50 min-w-[160px] py-1">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => { setCurrentLang(lang.code); setIsOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-xs font-body tracking-wide flex items-center gap-3 transition-colors duration-200 ${
                currentLang === lang.code
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-muted"
              }`}
              dir={lang.code === "ar" || lang.code === "he" ? "rtl" : "ltr"}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
