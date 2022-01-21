import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { IGame } from "./interfaces";

const GameContext = createContext<IGame>({
  computer: "",
  userWin: "",
  rounds: 0,
  playerChoice: "",
  playerScore: 0,
  computerScore: 0,
  submitChoice() {},
  resetGameStorage() {},
  resetScore() {},
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

  useEffect(() => {
    const computerStorage: any = localStorage.getItem("computerScore");
    const playerStorage: any = localStorage.getItem("playerScore");
    if (computerStorage || playerStorage) {
      setComputerScore(parseInt(computerStorage));
      setPlayerScore(parseInt(playerStorage));
    }
  }, []);

  const resetGameStorage = () => {
    localStorage.removeItem("playerScore");
    localStorage.removeItem("computerScore");
    setComputerScore(0);
    setPlayerScore(0);
  };

  const fetchComputer = () => {
    axios.get("http://localhost:5000/").then((res) => {
      setComputer(res.data.data.computer);
      setRounds((r: number) => r + 1);
    });
  };

  const submitChoice = (event: React.ChangeEvent<any>) => {
    //maybe wrong type?
    setPlayerChoice(event.target.dataset.id);
    fetchComputer();
  };

  const resetScore = () => {
    setPlayerScore(0);
    setComputerScore(0);
  };

  const contextValue: IGame = {
    computer,
    userWin,
    rounds,
    submitChoice,
    playerChoice,
    playerScore,
    getResults,
    computerScore,
    resetGameStorage,
    resetScore,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export { GameContext, GameProvider };
