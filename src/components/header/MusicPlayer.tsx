import { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Mall-style shopping music player using Web Audio API.
 * Auto-starts on first user interaction and persists across pages.
 */
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isStoppedRef = useRef(false);
  const hasAutoStarted = useRef(false);

  const createShoppingMusic = useCallback(() => {
    const ctx = new AudioContext();
    audioContextRef.current = ctx;
    isStoppedRef.current = false;

    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.12;
    masterGain.connect(ctx.destination);
    gainNodeRef.current = masterGain;

    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.value = -20;
    compressor.ratio.value = 4;
    compressor.connect(masterGain);

    const notes: Record<string, number> = {
      C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00,
      A4: 440.00, B4: 493.88, C5: 523.25, D5: 587.33, E5: 659.25,
      F5: 698.46, G5: 783.99, A5: 880.00,
      C3: 130.81, E3: 164.81, G3: 196.00, A3: 220.00, B3: 246.94,
      D3: 146.83, F3: 174.61,
    };

    const playNote = (freq: number, startTime: number, duration: number, volume = 0.3, type: OscillatorType = "triangle") => {
      if (isStoppedRef.current) return;
      const osc = ctx.createOscillator();
      const env = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      env.gain.setValueAtTime(0, startTime);
      env.gain.linearRampToValueAtTime(volume, startTime + 0.02);
      env.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      osc.connect(env);
      env.connect(compressor);
      osc.start(startTime);
      osc.stop(startTime + duration);
    };

    const chordProgressions = [
      [
        [notes.C3, notes.E4, notes.G4, notes.B4],
        [notes.D3, notes.F4, notes.A4, notes.C5],
        [notes.E3, notes.G4, notes.B4, notes.D5],
        [notes.F3, notes.A4, notes.C5, notes.E5],
        [notes.G3, notes.B4, notes.D5, notes.F5],
        [notes.A3, notes.C5, notes.E5, notes.G5],
        [notes.D3, notes.F4, notes.A4, notes.C5],
        [notes.G3, notes.B4, notes.D5, notes.F5],
      ],
      [
        [notes.A3, notes.C5, notes.E5, notes.G5],
        [notes.D3, notes.F4, notes.A4, notes.C5],
        [notes.G3, notes.B4, notes.D5, notes.F5],
        [notes.C3, notes.E4, notes.G4, notes.B4],
        [notes.F3, notes.A4, notes.C5, notes.E5],
        [notes.B3, notes.D5, notes.F5, notes.A5],
        [notes.E3, notes.G4, notes.B4, notes.D5],
        [notes.A3, notes.C5, notes.E5, notes.G5],
      ],
    ];

    const melodies = [
      [notes.E5, notes.D5, notes.C5, notes.D5, notes.E5, notes.G5, notes.A5, notes.G5,
       notes.F5, notes.E5, notes.D5, notes.C5, notes.D5, notes.E5, notes.C5, notes.D5],
      [notes.G5, notes.A5, notes.G5, notes.E5, notes.D5, notes.C5, notes.E5, notes.G5,
       notes.A5, notes.G5, notes.F5, notes.E5, notes.D5, notes.E5, notes.G5, notes.E5],
      [notes.C5, notes.E5, notes.G5, notes.A5, notes.G5, notes.E5, notes.D5, notes.C5,
       notes.D5, notes.F5, notes.A5, notes.G5, notes.F5, notes.E5, notes.D5, notes.C5],
    ];

    const bpm = 105;
    const beatDuration = 60 / bpm;
    const barDuration = beatDuration * 4;
    let currentBar = 0;

    const playBar = () => {
      if (isStoppedRef.current || !audioContextRef.current) return;
      const now = ctx.currentTime;
      const progIdx = currentBar % 2;
      const progression = chordProgressions[progIdx];
      const chordIdx = currentBar % 8;
      const chord = progression[chordIdx];

      playNote(chord[0], now, barDuration * 0.9, 0.25, "sine");
      playNote(chord[1], now + beatDuration * 0.5, beatDuration * 0.4, 0.08, "triangle");
      playNote(chord[2], now + beatDuration * 0.5, beatDuration * 0.4, 0.07, "triangle");
      playNote(chord[3], now + beatDuration * 0.5, beatDuration * 0.4, 0.06, "triangle");
      playNote(chord[1], now + beatDuration * 1.5, beatDuration * 0.3, 0.06, "triangle");
      playNote(chord[2], now + beatDuration * 1.5, beatDuration * 0.3, 0.05, "triangle");
      playNote(chord[1], now + beatDuration * 2.5, beatDuration * 0.4, 0.08, "triangle");
      playNote(chord[2], now + beatDuration * 2.5, beatDuration * 0.4, 0.07, "triangle");
      playNote(chord[3], now + beatDuration * 2.5, beatDuration * 0.4, 0.06, "triangle");
      playNote(chord[1], now + beatDuration * 3.25, beatDuration * 0.3, 0.05, "triangle");

      const melodyIdx = currentBar % melodies.length;
      const melody = melodies[melodyIdx];
      const notesPerBar = 8;
      const noteSpacing = barDuration / notesPerBar;

      for (let i = 0; i < notesPerBar; i++) {
        const mNote = melody[(chordIdx * 2 + i) % melody.length];
        const swing = i % 2 === 1 ? noteSpacing * 0.08 : 0;
        const vol = 0.08 + Math.sin(i * 0.7) * 0.03;
        playNote(mNote, now + i * noteSpacing + swing, noteSpacing * 0.7, vol, "sine");
      }

      for (let i = 0; i < 8; i++) {
        const hihatOsc = ctx.createOscillator();
        const hihatGain = ctx.createGain();
        hihatOsc.type = "square";
        hihatOsc.frequency.value = 8000 + Math.random() * 2000;
        const t = now + i * (barDuration / 8);
        hihatGain.gain.setValueAtTime(0, t);
        hihatGain.gain.linearRampToValueAtTime(i % 2 === 0 ? 0.015 : 0.008, t + 0.005);
        hihatGain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
        hihatOsc.connect(hihatGain);
        hihatGain.connect(compressor);
        hihatOsc.start(t);
        hihatOsc.stop(t + 0.06);
      }

      currentBar++;
      const timeout = setTimeout(playBar, barDuration * 1000);
      timeoutsRef.current.push(timeout);
    };

    playBar();
  }, []);

  const stopSound = useCallback(() => {
    isStoppedRef.current = true;
    timeoutsRef.current.forEach(t => clearTimeout(t));
    timeoutsRef.current = [];
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      stopSound();
      setIsPlaying(false);
    } else {
      createShoppingMusic();
      setIsPlaying(true);
    }
  };

  // Auto-start on first user interaction anywhere on the page
  useEffect(() => {
    if (hasAutoStarted.current) return;
    const startOnInteraction = () => {
      if (!hasAutoStarted.current) {
        hasAutoStarted.current = true;
        createShoppingMusic();
        setIsPlaying(true);
      }
      document.removeEventListener("click", startOnInteraction);
      document.removeEventListener("touchstart", startOnInteraction);
    };
    document.addEventListener("click", startOnInteraction);
    document.addEventListener("touchstart", startOnInteraction);
    return () => {
      document.removeEventListener("click", startOnInteraction);
      document.removeEventListener("touchstart", startOnInteraction);
    };
  }, [createShoppingMusic]);

  useEffect(() => {
    return () => { stopSound(); };
  }, [stopSound]);

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-20 left-4 z-50 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg text-foreground hover:bg-background transition-colors duration-200"
      aria-label={isPlaying ? "Mute music" : "Play shopping music"}
      title={isPlaying ? "Mute music" : "Play shopping music"}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5" />
      ) : (
        <VolumeX className="w-5 h-5" />
      )}
      {isPlaying && (
        <span className="absolute inset-0 rounded-full animate-ping bg-primary/10 pointer-events-none" />
      )}
    </button>
  );
};

export default MusicPlayer;
