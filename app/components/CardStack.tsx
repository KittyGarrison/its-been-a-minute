import { useEffect } from "react";
import { Card } from "./Card";

const CardStack = () => {
  const shuffleAudio = new Audio("/audio/cards_shuffle.mp3");

  useEffect(() => {
    shuffleAudio.play();
  }, []);

  return (
    <div>
      <Card />
    </div>
  );
};

export default CardStack;
