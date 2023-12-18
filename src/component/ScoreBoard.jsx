import React, { forwardRef, useState, useEffect, useRef } from "react";

import scoreboard from "../img/scoreboard.png";

const ScoreBoard = (props) => {

  return (
    <div className="scoreBox">
        <img src={scoreboard} width="1200px"></img>
    </div>
  );
};

export default ScoreBoard;
