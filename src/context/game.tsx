import React, { createContext, useState } from "react";

//to export
interface Game {
  computer: string | null;
  userWin: string | null;
  rounds: number;
  playerChoice: string;
  playerScore: number;
  submitChoice(event: React.ChangeEvent<any>): void;
  getResults(result: string, score: number): void;
}

const GameContext = createContext<Game>({
  computer: "",
  userWin: "",
  rounds: 3,
  playerChoice: "",
  playerScore: 0,
  submitChoice() {},
  getResults(result: string, score: number) {},
});

const GameProvider = ({ children }: any) => {
  const [computer, setComputer] = useState<Game["computer"]>("");
  const [userWin, setUserWin] = useState<Game["userWin"]>("");
  const [rounds, setRounds] = useState<Game["rounds"]>(3);
  const [playerChoice, setPlayerChoice] = useState<Game["playerChoice"]>("");
  const [playerScore, setPlayerScore] = useState<Game["playerScore"]>(0);

  function getResults(result: string, score: number) {
    setUserWin(result);
    if (result === "win") {
      setPlayerScore((s) => s + score);
    } else if (result === "lose") {
      setPlayerScore((s) => s - score);
    }
  }
  const submitChoice = (event: React.ChangeEvent<any>) => {
    setPlayerChoice(event.target.dataset.id);
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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
