import { useState, useEffect, useCallback } from "react";

import hairHero from "@/assets/hair-hero-1.jpg";
import hairBundlesStraight from "@/assets/hair-bundles-straight.jpg";
import hairBundlesBodywave from "@/assets/hair-bundles-bodywave.jpg";
import hairClosure from "@/assets/hair-closure.jpg";
import hairFrontal from "@/assets/hair-frontal.jpg";
import hairWigBlonde from "@/assets/hair-wig-blonde.jpg";
import hairWigBodywave from "@/assets/hair-wig-bodywave.jpg";
import hairBlondeStraight from "@/assets/hair-blonde-straight.jpg";
import hairFrontalDeepwave from "@/assets/hair-frontal-deepwave.jpg";
import hairClosureBodywave from "@/assets/hair-closure-bodywave.jpg";

const images = [
  hairHero,
  hairBundlesStraight,
  hairBundlesBodywave,
  hairClosure,
  hairFrontal,
  hairWigBlonde,
  hairWigBodywave,
  hairBlondeStraight,
  hairFrontalDeepwave,
  hairClosureBodywave,
];

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
      {/* Current image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1800ms] ease-in-out"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          opacity: transitioning ? 0 : 1,
        }}
      />
      {/* Next image (fades in underneath) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[nextIndex]})`,
        }}
      />
      {/* Overlay to blend with site theme */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      {/* Gradient edges for seamless blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-60" />
    </div>
  );
};

export default BackgroundSlideshow;
