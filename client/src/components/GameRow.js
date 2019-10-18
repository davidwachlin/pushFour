import React from 'react';
import Square from './Square';

export default function GameRow(props) {
  return (
    <div
      onClick={() => {
        props.handleSelectArray(props.rowIndex);
      }}
      className={`board-row ${props.isSelected ? 'selected' : ''}`}
    >
      {props.squares.map((square, index) => {
        return (
          <Square
            squareIndex={index}
            rowIndex={props.rowIndex}
            player={square}
          />
        );
      })}
    </div>
  );
}
