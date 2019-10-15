import React from 'react';

function Square(props) {
  return (
    <button className="square">
      {props.player === 0 ? null : props.player}
    </button>
  );
}

export default Square;
