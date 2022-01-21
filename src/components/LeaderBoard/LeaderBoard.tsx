import { motion } from "framer-motion";
import { useContext, useMemo } from "react";
import { leaderBoardButtonVariants } from "../../motion/variants";
import { GameContext } from "../../context/game";
import { UserContext } from "../../context/auth";
import "./leaderBoard.css";

const LeaderBoard = () => {
  const { playerScore, computerScore, resetScore } = useContext(GameContext);
  const state = useContext(UserContext)[0];

  useMemo(() => {
    localStorage.setItem("playerScore", playerScore.toString());
    localStorage.setItem("computerScore", computerScore.toString());
  }, [playerScore, computerScore]);

  return (
    <div className="leaderBoard-container">
      <motion.div
        className="leaderBoard-reset"
        onClick={resetScore}
        variants={leaderBoardButtonVariants}
        whileHover="hover"
      >
        Reset Score
      </motion.div>
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
