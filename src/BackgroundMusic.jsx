import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const startMusic = () => {
      audioRef.current.play().catch(err => console.log(err));
      document.removeEventListener("click", startMusic);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // User left the page
        audioRef.current.pause();
      } else {
        // User returned to the page
        audioRef.current.play().catch(err => console.log(err));
      }
    };

    document.addEventListener("click", startMusic);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup: stop music when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      document.removeEventListener("click", startMusic);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/gtone.mp3" type="audio/mpeg" />
    </audio>
  );
}