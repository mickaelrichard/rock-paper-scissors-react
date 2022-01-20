import React, { useContext } from "react";
import { GameContext } from "../../context/game";
import "./pick.css";
interface IProps {
  anim: boolean;
}
const Pick: React.FC<IProps> = ({ anim }) => {
  const { submitChoice } = useContext(GameContext);
  return (
    <div className="pick">
      <div className="pick-items">
        <div className="pick-icon">
          <img
            src={"./icon-paper.svg"}
            data-id="paper"
            onClick={submitChoice}
            className={anim ? "pick-disabled" : ""}
          />
        </div>
        <div className="pick-icon">
          <img
            data-id="scissors"
            onClick={submitChoice}
            src={"./icon-scissors.svg"}
            className={anim ? "pick-disabled" : ""}
          />
        </div>
        <div className="pick-icon">
          <img
            src={"./icon-rock.svg"}
            data-id="rock"
            onClick={submitChoice}
            className={anim ? "pick-disabled" : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default Pick;
