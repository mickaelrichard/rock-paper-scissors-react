import { motion } from "framer-motion";
import React, { useContext } from "react";
import { GameContext } from "../../context/game";
import "./pick.css";

interface IProps {
  anim: boolean;
}

const images = ["rock", "paper", "scissors"];

const Pick: React.FC<IProps> = ({ anim }) => {
  const { submitChoice } = useContext(GameContext);

  return (
    <div className="pick">
      <div className="pick-items">
        {images.map((img) => {
          return (
            <div key={img} className="pick-icon">
              <motion.img
                alt={img}
                src={`./icon-${img}.svg`}
                data-id={img}
                onClick={submitChoice}
                className={anim ? "pick-disabled" : ""}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 500 }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pick;
