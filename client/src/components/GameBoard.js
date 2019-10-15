import React from "react";
import GameRow from "./GameRow";

class Board extends React.Component {
  render() {
    return (
      <div>
        <div
          onClick={() => {
            this.props.selectArray(0);
          }}
        >
          <GameRow
            className='board-row'
            squares={this.props.squares[0]}
            rowIndex={0}
          />
        </div>

        <div
          onClick={() => {
            this.props.selectArray(1);
          }}
        >
          <GameRow
            className='board-row'
            squares={this.props.squares[1]}
            rowIndex={1}
          />
        </div>

        <div
          onClick={() => {
            this.props.selectArray(2);
          }}
        >
          <GameRow
            className='board-row'
            squares={this.props.squares[2]}
            rowIndex={2}
          />
        {this.props.squares.map((row, index) => {
          <div
            onClick={() => {
              this.props.selectArray(index)
            }}
          >
           <GameRow
               className='board-row'
               squares={this.props.squares[index]}
               rowIndex={index}
           />
         </div>
      </div>
    );
  }
}
export default Board;
