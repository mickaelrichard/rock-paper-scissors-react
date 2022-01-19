import { Pick, Play, LeaderBoard } from "../components/";
import { useState } from "react";

const Game = () => {
  const [anim, setAnim] = useState<boolean>(false);

  return (
    <div className="game-container">
      <LeaderBoard />
      <Play anim={anim} setAnim={setAnim} />
      <Pick anim={anim} />
    </div>
  );
};

export default Game;
