import { useEffect } from "react";

export const useAudio = () => {
  const shuffleAudioRef = useRef < HTMLAudioElement | null > (null);
  
  useEffect(() => {
    shuffleAudioRef.current = new Audio("/audio/cards_shuffle.mp3");
    shuffleAudioRef.current.play();
  }, []);
}