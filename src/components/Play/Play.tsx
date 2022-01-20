import { useEffect, useRef, useContext, useState } from "react";
import { GameContext } from "../../context/game";
import "./play.css";

interface IProps {
  setAnim: React.Dispatch<React.SetStateAction<boolean>>;
  anim: boolean;
}
const Play: React.FC<IProps> = ({ anim, setAnim }) => {
  const [uiPlayerHand, setUiPlayerHand] = useState<string | null>("rock");
  const [uiComputerHand, setUiComputerHand] = useState<string | null>("rock");
  const firstUpdate = useRef<boolean>(true);
  const { rounds, playerChoice, getResults, computer } = useContext(
    GameContext
  );

  const result = () => {
    if (playerChoice === "rock" && computer === "scissors") {
      getResults("win", 1);
    } else if (playerChoice === "rock" && computer === "paper") {
      getResults("lose", 1);
    } else if (playerChoice === "scissors" && computer === "paper") {
      getResults("win", 1);
    } else if (playerChoice === "scissors" && computer === "rock") {
      getResults("lose", 1);
    } else if (playerChoice === "paper" && computer === "rock") {
      getResults("win", 1);
    } else if (playerChoice === "paper" && computer === "scissors") {
      getResults("lose", 1);
    } else {
      getResults("draw", 0);
    }
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setAnim(true);
    setTimeout(() => {
      result();
      setAnim(false);
      setUiComputerHand(computer);
      setUiPlayerHand(playerChoice);
    }, 1700);
  }, [rounds]);

  const classNames = [];
  if (anim) {
    classNames.push("shakeP", "play-player-hand");
  } else {
    classNames.push("play-player-hand");
  }

  return (
    <div>
      <div>
        <img
          className={classNames.join(" ")}
          src={playerChoice ? `./${uiPlayerHand}-b.png` : `./rock-b.png`}
        />
        <img
          src={computer ? `./${uiComputerHand}.png` : `./rock.png`}
          className={anim ? "shakeC" : ""}
        />
      </div>
    </div>
  );
};

export default Play;