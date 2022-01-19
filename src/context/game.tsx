import React, { createContext, useState } from "react";
import axios from "axios";
import { IGame } from "./interface";

const GameContext = createContext<IGame>({
  computer: "",
  userWin: "",
  rounds: 0,
  playerChoice: "",
  playerScore: 0,
  computerScore: 0,
  submitChoice() {},
  getResults(result: string, score: number) {},
});

const GameProvider = ({ children }: any) => {
  const [computer, setComputer] = useState<IGame["computer"]>("");
  const [userWin, setUserWin] = useState<IGame["userWin"]>("");
  const [rounds, setRounds] = useState<IGame["rounds"]>(0);
  const [playerChoice, setPlayerChoice] = useState<IGame["playerChoice"]>("");
  const [playerScore, setPlayerScore] = useState<IGame["playerScore"]>(0);
  const [computerScore, setComputerScore] = useState<IGame["computerScore"]>(0);

  function getResults(result: string, score: number) {
    setUserWin(result);
    if (result === "win") {
      setPlayerScore((s) => s + score);
    } else if (result === "lose") {
      setComputerScore((s) => s + score);
    }
  }

  const fetchComputer = () => {
    axios.get("http://localhost:5000/").then((res) => {
      setComputer(res.data.data.computer);
      setRounds((r) => r + 1);
    });
  };

  const submitChoice = (event: React.ChangeEvent<any>) => {
    setPlayerChoice(event.target.dataset.id);
    fetchComputer();
  };

  return (
    <GameContext.Provider
      value={{
        computer,
        userWin,
        rounds,
        submitChoice,
        playerChoice,
        playerScore,
        getResults,
        computerScore,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
