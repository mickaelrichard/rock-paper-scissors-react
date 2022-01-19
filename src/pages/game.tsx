import LeaderBoard from "../components/LeaderBoard";
import Pick from "../components/Pick";
import Play from "../components/Play";

const Game = () => {
  return (
    <div className="game-container">
      <LeaderBoard />
      {/* <div>
        <button onClick={handleSubmit}>test</button>
        <p>{rounds}</p>
        <div
          style={{ height: 20, width: 20, backgroundColor: "red" }}
          data-id="paper"
          onClick={submitChoice}
        ></div>
        <div
          style={{ height: 20, width: 20, backgroundColor: "red" }}
          data-id="rock"
          onClick={submitChoice}
        ></div>
        <div
          style={{ height: 20, width: 20, backgroundColor: "red" }}
          data-id="scissors"
          onClick={submitChoice}
        ></div>
        {playerChoice}
        
        <p>playerScore:{playerScore}</p>
        // <p>userWin:{userWin}</p>
        // <p>playerChoice: {playerChoice}</p>
      </div> */}

      <Play />
      <Pick />
    </div>
  );
};

export default Game;
