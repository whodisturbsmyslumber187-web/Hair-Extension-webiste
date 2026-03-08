import { useState, useEffect, useCallback } from "react";

import bgHair1 from "@/assets/bg-hair-1.jpg";
import bgHair2 from "@/assets/bg-hair-2.jpg";
import bgHair3 from "@/assets/bg-hair-3.jpg";
import bgHair4 from "@/assets/bg-hair-4.jpg";
import bgHair5 from "@/assets/bg-hair-5.jpg";

const images = [bgHair1, bgHair2, bgHair3, bgHair4, bgHair5];

const BackgroundSlideshow = () => {
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
      {/* Next image (underneath) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[nextIndex]})` }}
      />
      {/* Current image (fades out) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1800ms] ease-in-out"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          opacity: transitioning ? 0 : 1,
        }}
      />
      {/* Lighter overlay so images are more visible */}
      <div className="absolute inset-0 bg-background/70" />
      {/* Subtle edge blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/60" />
    </div>
  );
};

export default BackgroundSlideshow;
