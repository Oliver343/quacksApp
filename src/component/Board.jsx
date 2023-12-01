import React, { forwardRef, useState, useEffect, useRef } from "react";
import ChipImages from "./ChipImages";

import chipG1 from "../img/chipG1.png";
import board from "../img/board.png";
import boardBoom from "../img/boardboom.png"

const Board = (props) => {
  const [currentPot, setCurrentPot] = useState([]);
  const [exploded, setExploded] = useState(false);
  let boardImage = board

  if (exploded) {
    document.getElementById("explodedText").hidden = false;
    document.getElementById("pullButton").disabled = true;
    boardImage = boardBoom
  }

  let chipSpace = useRef(0);
  let cherrybombValue = useRef(0);
  console.log("CHIPSPACE");
  console.log(chipSpace);

  function drawRandomIngredient() {
    const randomNo = Math.floor(Math.random() * props.bagForTurn.length);
    const currentIngredient = props.bagForTurn.splice(randomNo, 1)[0];
    console.log(currentIngredient);
    chipSpace.current = chipSpace.current + currentIngredient.value;
    currentIngredient["chipSpace"] = chipSpace.current;
    let tempArr = [...currentPot];
    tempArr.push(currentIngredient);
    console.log(tempArr);
    setCurrentPot(tempArr);
    console.log(props.bagForTurn);
    if (currentIngredient.volatile) {
      cherrybombValue.current =
        cherrybombValue.current + currentIngredient.value;
    }
    if (cherrybombValue.current >= 8) {
      setExploded(true);
    }
  }

  //   {
  //     color: "white",
  //     value: "1",
  //     img: "chipW1",
  //     effect: false,
  //     volatile: true,
  //   },

  let mappedChips = currentPot.map((ingredient) => {
    return <ChipImages chipSpace={ingredient.chipSpace} img={ingredient.img} />;
  });

  return (
    <div>
      <div className="row">
        <div className="col-6">
          {" "}
          <h1 id="explodedText" hidden={true} style={{ color: "red" }}>
            BOOM!
          </h1>
          <button id="pullButton" onClick={() => drawRandomIngredient()}>
            PULL!
          </button>{" "}
        </div>
        <div className="col-6">
          <img className="mask" src={chipG1} width="75px"></img>{" "}
        </div>
      </div>
      <div className="boardBox">
        <img className="boardMain" src={boardImage} />
        <img className="chips chip0" src={chipG1} width="125px"></img>

        <ChipImages chipSpace={22} />
        {mappedChips}
      </div>
    </div>
  );
};

export default Board;
