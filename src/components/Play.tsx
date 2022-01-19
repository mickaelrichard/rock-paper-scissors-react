import { useEffect, useRef, useContext, useState } from "react";
import { GameContext } from "../context/game";

const Play = () => {
  const [anim, setAnim] = useState(false);
  const [uiPlayerHand, setUiPlayerHand] = useState<string | null>("rock");
  const [uiComputerHand, setUiComputerHand] = useState<string | null>("rock");

  const firstUpdate = useRef(true);
  const {
    rounds,
    playerScore,
    userWin,
    submitChoice,
    playerChoice,
    getResults,
    computerScore,
    computer,
  } = useContext(GameContext);
  useEffect(() => {}, []);
  // const fetchComputer = () => {
  //   axios
  //     .get("http://localhost:5000/")
  //     .then((res) => setComputer(res.data.data.computer));
  // };
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
          // "play-player-hand"
          // className={anim ? "shakeP" : ""}
          className={classNames.join(" ")}
          src={playerChoice ? `./${uiPlayerHand}.png` : `./rock.png`}
        />
        <img
          src={computer ? `./${uiComputerHand}.png` : `./rock.png`}
          className={anim ? "shakeC" : ""}
        />
      </div>
      {/* <p>playerChoice: {playerChoice}</p>
      <p>computer:{computer}</p>
      <p>rounds:{rounds}</p>
      <p>playerScore:{playerScore}</p>
      <p>computerScore:{computerScore}</p>
      <p>userWin:{userWin}</p> */}
    </div>
  );
};

export default Play;
