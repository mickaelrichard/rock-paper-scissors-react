export interface IGame {
  computer: string | null;
  userWin: string | null;
  rounds: number;
  playerChoice: string;
  playerScore: number;
  computerScore: number;
  submitChoice(event: React.ChangeEvent<any>): void;
  getResults(result: string, score: number): void;
}
