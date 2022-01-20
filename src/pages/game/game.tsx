import { Pick, Play, LeaderBoard } from "../../components";
import { useState, useEffect } from "react";
import "./game.css";
const Game = () => {
  const [anim, setAnim] = useState<boolean>(false);

  useEffect(() => {
    document.title = "Game";
  }, []);

  return (
    <div className="game-container">
      <LeaderBoard />
      <Play anim={anim} setAnim={setAnim} />
      <Pick anim={anim} />
    </div>
  );
};

export default Game;
