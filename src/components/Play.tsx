import { useEffect, useRef, useContext } from "react";
import { GameContext } from "../context/game";
const Play = () => {
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

    result();
  }, [rounds]);

  return (
    <div>
      <div>
        <img
          className="play-player-hand"
          src={playerChoice ? `./${playerChoice}.png` : `./rock.png`}
        />
        <img src={computer ? `./${computer}.png` : `./rock.png`} />
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
