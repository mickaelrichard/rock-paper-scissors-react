import React, { useEffect, useRef, useContext, useState } from "react";
import { GameContext } from "../context/game";
import LeaderBoard from "../components/LeaderBoard";
import Pick from "../components/Pick";
import Play from "../components/Play";
import axios from "axios";

const Game = () => {
  const firstUpdate = useRef(true);
  const {
    rounds,
    playerScore,
    userWin,
    submitChoice,
    playerChoice,
    getResults,
  } = useContext(GameContext);
  useEffect(() => {}, []);
  const [computer, setComputer] = useState("");
  const handleSubmit = () => {
    axios
      .get("http://localhost:5000/")
      .then((res) => setComputer(res.data.data.computer));
  };
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
  }, [computer]);
  return (
    <div className="game-container">
      <LeaderBoard />
      <div>
        <button onClick={handleSubmit}>test</button>
        <p>{rounds}</p>
        <div
          style={{ height: 20, width: 20, backgroundColor: "red" }}
          data-id="paper"
          onClick={submitChoice}
        ></div>
        <div
          style={{ height: 20, width: 20, backgroundColor: "red" }}
          data-id="rock"
          onClick={submitChoice}
        ></div>
        <div
          style={{ height: 20, width: 20, backgroundColor: "red" }}
          data-id="scissors"
          onClick={submitChoice}
        ></div>
        {playerChoice}
        <p>computer:{computer}</p>
        <p>playerScore:{playerScore}</p>
        <p>userWin:{userWin}</p>
        <p>playerChoice: {playerChoice}</p>
      </div>

      <Pick />
      <Play />
    </div>
  );
};

export default Game;
