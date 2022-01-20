import { useContext, useMemo } from "react";
import { GameContext } from "../../context/game";
import { UserContext } from "../../context/auth";
import "./leaderBoard.css";
const LeaderBoard = () => {
  const { playerScore, computerScore } = useContext(GameContext);
  const [state, setState] = useContext(UserContext);

  useMemo(() => {
    localStorage.setItem("playerScore", playerScore.toString());
    localStorage.setItem("computerScore", computerScore.toString());
  }, [playerScore, computerScore]);

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
