import React from "react";
import Square from "./Square";

export default function GameRow(props) {
  return props.squares.map((square,index) => {
    return (
    <Square 
      squareIndex={index}
      rowIndex={props.rowIndex}
      player={square}
    />)
  });
}
