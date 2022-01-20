import { useContext } from "react";
import { GameContext } from "../context/game";
import { UserContext } from "../context/auth";

const LeaderBoard = () => {
  const { playerScore, computerScore } = useContext(GameContext);
  const [state, setState] = useContext(UserContext);

  return (
    <div className="leaderBoard-container">
      <div>
        {playerScore > computerScore && <i className="fas fa-medal"></i>}
        <span className="leaderBoard-title">{state?.data?.username}</span>
        <div className="leaderBoard-score">{playerScore}</div>
      </div>
      <div>
        {playerScore < computerScore && <i className="fas fa-medal"></i>}
        <span className="leaderBoard-title">computer</span>
        <div className="leaderBoard-score">{computerScore}</div>
      </div>
    </div>
  );
};

export default LeaderBoard;
