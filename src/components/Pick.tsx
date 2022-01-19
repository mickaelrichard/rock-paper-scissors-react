import React, { useEffect, useRef, useContext, useState } from "react";
import { GameContext } from "../context/game";
const Pick = () => {
  const { submitChoice } = useContext(GameContext);

  return (
    <div className="pick">
      <div className="items">
        <div className="pick-icon">
          <img
            src={"./icon-paper.svg"}
            data-id="paper"
            onClick={submitChoice}
          />
        </div>
        <div className="pick-icon">
          <img
            data-id="scissors"
            onClick={submitChoice}
            src={"./icon-scissors.svg"}
          />
        </div>
        <div className="pick-icon">
          <img src={"./icon-rock.svg"} data-id="rock" onClick={submitChoice} />
        </div>
      </div>
    </div>
  );
};

export default Pick;
