import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const StatusBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  
  const usps = [
    t("statusBar.usp1"),
    t("statusBar.usp2"),
    t("statusBar.usp3"),
    t("statusBar.usp4"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % usps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [usps.length]);

  return (
    <div className="bg-primary text-primary-foreground py-2">
      <div className="container mx-auto px-4 text-center">
        <p 
          key={currentIndex}
          className="text-xs font-body tracking-wider transition-all duration-700 ease-in-out opacity-100 animate-fade-in"
        >
          {usps[currentIndex]}
        </p>
      </div>
    </div>
  );
};

export default StatusBar;
