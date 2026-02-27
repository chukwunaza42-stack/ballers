import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  useEffect(() => {
    const startMusic = () => {
      audioRef.current.play().catch(err => console.log(err));
document.removeEventListener("click", startMusic);
    };
    document.addEventListener("click",startMusic);
  }, []);
  return (
    <audio ref={audioRef} loop>
      <source src="/gtone.mp3" type="audio/mpeg" />
    </audio>
  );
}

