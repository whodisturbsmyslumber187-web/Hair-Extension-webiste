import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { languages, type LanguageCode } from "@/i18n";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLang = (code: LanguageCode) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 p-2 text-nav-foreground hover:text-nav-hover transition-colors duration-200"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-xs font-body tracking-wide hidden sm:inline">{currentLang.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute end-0 top-full mt-1 bg-card border border-border shadow-lg z-50 min-w-[160px] py-1">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => changeLang(lang.code)}
              className={`w-full text-start px-4 py-2.5 text-sm font-body flex items-center gap-3 transition-colors duration-150 ${
                i18n.language === lang.code
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
