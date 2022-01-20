import { Pick, Play, LeaderBoard, Modal } from "../../components";
import { useState, useEffect } from "react";
import "./game.css";
const Game = () => {
  const [anim, setAnim] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  useEffect(() => {
    document.title = "Game";
  }, []);

  return (
    <div className="game-container">
      <LeaderBoard />
      <Play anim={anim} setAnim={setAnim} />
      <Pick anim={anim} />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <button
        className="game-modal-opener"
        onClick={() => setIsModalOpen(true)}
      >
        Is the computer cheating?
      </button>
    </div>
  );
};

export default Game;
