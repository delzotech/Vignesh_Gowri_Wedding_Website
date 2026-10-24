"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

export type AudioTrackType = "intro" | "invitation";

interface AudioContextType {
  isPlaying: boolean;
  isMuted: boolean;
  currentTrack: AudioTrackType;
  duration: number;
  currentTime: number;
  progress: number;
  hasStarted: boolean;
  playAudio: () => Promise<void>;
  pauseAudio: () => void;
  toggleAudio: () => void;
  toggleMute: () => void;
  replayAudio: () => void;
  switchTrack: (track: AudioTrackType) => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

const TRACKS: Record<AudioTrackType, string> = {
  intro: "/audio/Idicha-Pacharisi.mp3",
  invitation: "/audio/Idicha-Pacharisi.mp3",
};

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<AudioTrackType>("intro");
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  // Exactly ONE singleton Audio instance for the entire website
  const audioInstanceRef = useRef<HTMLAudioElement | null>(null);
  const currentTrackRef = useRef<AudioTrackType>("intro");
  const userMutedRef = useRef<boolean>(false);

  // Initialize the single audio element only once on the client
  useEffect(() => {
    if (typeof window === "undefined") return;

    const audio = new Audio();
    audio.preload = "auto";
    audio.autoplay = true;
    audio.setAttribute("playsinline", "true");
    audio.src = "/audio/Idicha-Pacharisi.mp3";
    audio.load();
    audioInstanceRef.current = audio;
    currentTrackRef.current = "intro";
    (window as unknown as { __weddingAudio?: HTMLAudioElement }).__weddingAudio = audio;

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      // Loop the single wedding audio continuously
      audio.currentTime = 0;
      if (!userMutedRef.current) {
        audio.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setHasStarted(true);
    };
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    // Start default playback for intro ("Idicha-Pacharisi")
    const unlockAndPlay = () => {
      if (userMutedRef.current) return;
      audio.muted = false;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsMuted(false);
          setHasStarted(true);
          cleanupAmbient();
        })
        .catch(() => {});
    };

    const addAmbient = () => {
      const opts = { capture: true, passive: true };
      window.addEventListener("pointerdown", unlockAndPlay, opts);
      window.addEventListener("touchstart", unlockAndPlay, opts);
      window.addEventListener("click", unlockAndPlay, opts);
      window.addEventListener("keydown", unlockAndPlay, opts);
      window.addEventListener("mousemove", unlockAndPlay, { once: true, passive: true });
      window.addEventListener("scroll", unlockAndPlay, { once: true, passive: true });
      document.addEventListener("pointerdown", unlockAndPlay, opts);
      document.addEventListener("click", unlockAndPlay, opts);
    };

    const cleanupAmbient = () => {
      const opts = { capture: true };
      window.removeEventListener("pointerdown", unlockAndPlay, opts);
      window.removeEventListener("touchstart", unlockAndPlay, opts);
      window.removeEventListener("click", unlockAndPlay, opts);
      window.removeEventListener("keydown", unlockAndPlay, opts);
      window.removeEventListener("mousemove", unlockAndPlay);
      window.removeEventListener("scroll", unlockAndPlay);
      document.removeEventListener("pointerdown", unlockAndPlay, opts);
      document.removeEventListener("click", unlockAndPlay, opts);
    };

    // Primary attempt: unmuted direct autoplay
    audio.muted = false;
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setIsMuted(false);
        setHasStarted(true);
      })
      .catch(() => {
        // If unmuted autoplay blocked by browser policy:
        // 1. Play muted immediately so media buffers and runs
        audio.muted = true;
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
            setIsMuted(false);
          })
          .catch(() => {});
        // 2. Unmute & play with full sound on the first user touch/click/key
        addAmbient();
      });

    return () => {
      cleanupAmbient();
      audio.pause();
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audioInstanceRef.current = null;
    };
  }, []);

  // Ensure the single wedding audio continues playing smoothly without interruption
  const switchTrack = useCallback((track: AudioTrackType) => {
    currentTrackRef.current = track;
    setCurrentTrack(track);
    const audio = audioInstanceRef.current;
    if (!audio) return;

    // Continue playing the single track seamlessly if not muted
    if (!userMutedRef.current && audio.paused) {
      audio.muted = false;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        })
        .catch(() => {});
    }
  }, []);

  const playAudio = useCallback(async () => {
    const audio = audioInstanceRef.current;
    if (!audio) return;
    try {
      userMutedRef.current = false;
      setIsMuted(false);
      audio.muted = false;
      setHasStarted(true);
      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.warn("Audio playback gesture required:", err);
    }
  }, []);

  const pauseAudio = useCallback(() => {
    const audio = audioInstanceRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  }, []);

  const toggleAudio = useCallback(() => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }, [isPlaying, pauseAudio, playAudio]);

  const toggleMute = useCallback(() => {
    const audio = audioInstanceRef.current;
    if (!audio) return;

    if (!isMuted && isPlaying) {
      // Mute / Stop audio
      userMutedRef.current = true;
      audio.muted = true;
      audio.pause();
      setIsMuted(true);
      setIsPlaying(false);
    } else {
      // Unmute & Resume
      userMutedRef.current = false;
      audio.muted = false;
      setIsMuted(false);
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        })
        .catch(() => {});
    }
  }, [isMuted, isPlaying]);

  const replayAudio = useCallback(() => {
    const audio = audioInstanceRef.current;
    if (!audio) return;
    userMutedRef.current = false;
    setIsMuted(false);
    audio.muted = false;
    audio.currentTime = 0;
    audio.play().then(() => {
      setIsPlaying(true);
      setHasStarted(true);
    }).catch(() => {});
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        isMuted,
        currentTrack,
        duration,
        currentTime,
        progress,
        hasStarted,
        playAudio,
        pauseAudio,
        toggleAudio,
        toggleMute,
        replayAudio,
        switchTrack,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
