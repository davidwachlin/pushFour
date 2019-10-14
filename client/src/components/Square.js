import React from 'react';

function Square(props) {
    if(props.player===0){
        return (
          <button className="square"  >
          </button>
        )
    } else {
        return (
            <button className="square"  >
              {props.player}
            </button>
        )
    }
}

export default Square
