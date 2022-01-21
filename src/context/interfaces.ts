export interface IGame {
  computer: string | null;
  userWin: string | null;
  rounds: number;
  playerChoice: string;
  playerScore: number;
  computerScore: number;
  submitChoice(event: React.ChangeEvent<any>): void;
  getResults(result: string, score: number): void;
  resetGameStorage(): void;
  resetScore(): void;
}

export interface IAuth {
  user: {
    data: {
      id: string;
      email: string;
      username: string;
    } | null;
    error: string | null;
    loading: boolean;
  };
  setUser: React.Dispatch<React.SetStateAction<IAuth["user"]>>;
  test(): void;
}
