import { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Ambient music player using Web Audio API.
 * Generates a soothing, luxurious ambient soundscape — no external files needed.
 */
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const createAmbientSound = useCallback(() => {
    const ctx = new AudioContext();
    audioContextRef.current = ctx;

    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.06; // Very quiet background
    masterGain.connect(ctx.destination);
    gainNodeRef.current = masterGain;

    // Warm pad chord (Cmaj7 voiced)
    const frequencies = [130.81, 164.81, 196.00, 246.94]; // C3, E3, G3, B3
    const oscs: OscillatorNode[] = [];

    frequencies.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      oscGain.gain.value = 0.3 - i * 0.05;
      
      osc.type = "sine";
      osc.frequency.value = freq;
      
      // Slow detune for warmth
      osc.detune.value = Math.sin(i) * 5;
      
      osc.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start();
      oscs.push(osc);

      // Second layer slightly detuned
      const osc2 = ctx.createOscillator();
      const osc2Gain = ctx.createGain();
      osc2Gain.gain.value = 0.15;
      osc2.type = "sine";
      osc2.frequency.value = freq * 1.002; // Slight chorus
      osc2.connect(osc2Gain);
      osc2Gain.connect(masterGain);
      osc2.start();
      oscs.push(osc2);
    });

    // High shimmer
    const shimmer = ctx.createOscillator();
    const shimmerGain = ctx.createGain();
    shimmerGain.gain.value = 0.02;
    shimmer.type = "sine";
    shimmer.frequency.value = 523.25; // C5
    shimmer.connect(shimmerGain);
    shimmerGain.connect(masterGain);
    shimmer.start();
    oscs.push(shimmer);

    oscillatorsRef.current = oscs;

    // Gentle volume modulation
    let time = 0;
    intervalRef.current = setInterval(() => {
      time += 0.05;
      if (masterGain.gain) {
        masterGain.gain.value = 0.04 + Math.sin(time * 0.3) * 0.02;
      }
    }, 100);
  }, []);

  const stopSound = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    oscillatorsRef.current.forEach(osc => {
      try { osc.stop(); } catch {}
    });
    oscillatorsRef.current = [];
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      stopSound();
      setIsPlaying(false);
    } else {
      createAmbientSound();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => { stopSound(); };
  }, [stopSound]);

  return (
    <button
      onClick={toggleMusic}
      className="p-2 text-nav-foreground hover:text-nav-hover transition-colors duration-200 relative group"
      aria-label={isPlaying ? "Mute music" : "Play ambient music"}
      title={isPlaying ? "Mute music" : "Play ambient music"}
    >
      {isPlaying ? (
        <Volume2 className="w-4 h-4" />
      ) : (
        <VolumeX className="w-4 h-4" />
      )}
      {/* Subtle pulse when playing */}
      {isPlaying && (
        <span className="absolute inset-0 rounded-full animate-ping bg-primary/10 pointer-events-none" />
      )}
    </button>
  );
};

export default MusicPlayer;
