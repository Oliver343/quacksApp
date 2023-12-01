import React, { forwardRef, useState, useEffect } from "react";
import ChipImages from "./ChipImages";
import Board from "./Board";

import chipG1 from "../img/chipG1.png";
import chipO1 from "../img/chipO1.png";
import chipW1 from "../img/chipW1.png";
import chipW2 from "../img/chipW2.png";
import chipW3 from "../img/chipW3.png";

const Home = () => {
  let bag = [
    {
      color: "white",
      value: 1,
      img: chipW1,
      effect: false,
      volatile: true,
    },
    {
      color: "white",
      value: 1,
      img: chipW1,
      effect: false,
      volatile: true,
    },
    {
      color: "white",
      value: 1,
      img: chipW1,
      effect: false,
      volatile: true,
    },
    {
      color: "white",
      value: 1,
      img: chipW1,
      effect: false,
      volatile: true,
    },
    {
      color: "white",
      value: 2,
      img: chipW2,
      effect: false,
      volatile: true,
    },
    {
      color: "white",
      value: 2,
      img: chipW2,
      effect: false,
      volatile: true,
    },
    {
      color: "white",
      value: 3,
      img: chipW3,
      effect: false,
      volatile: true,
    },
    {
      color: "green",
      value: 1,
      img: chipG1,
      effect: true,
      volatile: false,
    },
    {
      color: "orange",
      value: 1,
      img: chipO1,
      effect: false,
      volatile: false,
    },
  ];

  let bagForTurn = [...bag];

  return (
    <div className="container-flex">
      <div className="row">
        <div className="col-12">
          <h1>Title</h1>
        </div>
      </div>
      <Board bagForTurn={bagForTurn} chipSpace={0} />
    </div>
  );
};

export default Home;
