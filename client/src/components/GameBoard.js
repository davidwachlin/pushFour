import React from 'react';
import GameRow from './GameRow';

class Board extends React.Component {
  render() {
    return (
      <div>
        {this.props.squares.map((row, index) => {
          return (
            <div
              onClick={() => {
                this.props.selectArray(index);
              }}
            >
              <GameRow
                className="board-row"
                squares={this.props.squares[index]}
                rowIndex={index}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Board;
