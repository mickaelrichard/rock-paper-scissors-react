import { useContext } from "react";
import { GameContext } from "../context/game";

const LeaderBoard = () => {
  const { playerScore, computerScore } = useContext(GameContext);

  return (
    <div className="leaderBoard-container">
      <div>
        {playerScore > computerScore && <i className="fas fa-medal"></i>}
        <span className="leaderBoard">username</span>
        <div className="leaderBoard-score">{playerScore}</div>
      </div>
      <div>
        {playerScore < computerScore && <i className="fas fa-medal"></i>}
        <span className="leaderBoard">computer</span>
        <div className="leaderBoard-score">{computerScore}</div>
      </div>
    </div>
  );
};

export default LeaderBoard;
