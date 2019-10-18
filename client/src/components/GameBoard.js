import React from 'react';
import GameRow from './GameRow';

class Board extends React.Component {
  render() {
    return (
      <div>
        {this.props.squares.map((row, index) => {
          return (
            <GameRow
              handleSelectArray={this.props.handleSelectArray}
              squares={this.props.squares[index]}
              rowIndex={index}
              isSelected={this.props.selectedArray === index}
            />
          );
        })}
      </div>
    );
  }
}
export default Board;
