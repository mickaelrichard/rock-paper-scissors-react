const Pick = () => {
  return (
    <div className="pick">
      {/* <img src={Triangle} alt="" className="triangle" /> */}
      <div className="items">
        <div
          data-id="paper"
          // onClick={setChoice}
          className="pick-icon pick-icon-paper"
        >
          <img src={"./icon-paper.svg"} />
        </div>
        <div
          data-id="scissors"
          // onClick={setChoice}

          className="pick-icon pick-icon-scissors"
        >
          {" "}
          <img src={"./icon-scissors.svg"} />
        </div>
        <div
          data-id="rock"
          // onClick={setChoice}
          className="pick-icon pick-icon-rock"
        >
          {" "}
          <img src={"./icon-rock.svg"} />
        </div>
      </div>
    </div>
  );
};

export default Pick;
