import { useState, useEffect, useCallback } from "react";

import img1 from "@/assets/wholesale-salon-1.jpg";
import img2 from "@/assets/wholesale-bundles-2.jpg";
import img3 from "@/assets/wholesale-stylist-4.jpg";
import img4 from "@/assets/wholesale-packaging-5.jpg";

const images = [img1, img2, img3, img4];

const WholesaleSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  const advance = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      const next = (nextIndex + 1) % images.length;
      setNextIndex(next);
      setTransitioning(false);
    }, 1800);
  }, [nextIndex]);

  useEffect(() => {
    const interval = setInterval(advance, 5000);
    return () => clearInterval(interval);
  }, [advance]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[nextIndex]})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1800ms] ease-in-out"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          opacity: transitioning ? 0 : 1,
        }}
      />
      <div className="absolute inset-0 bg-black/25" />
    </div>
  );
};

export default WholesaleSlideshow;
