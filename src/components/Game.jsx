import React, { useState } from 'react';
import Square from './Square';

const Game = () => {
  const [num, setNum] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let logic of winnerLogin) {
      const [a, b, c] = logic;
      if (num[a] !== null && num[a] === num[b] && num[a] === num[c]) {
        return num[a];
      }
    }
    return false;
  };

  const handleClick = (e) => {
    if(num[e]!==null){
      return ;
    }
    const position = [...num];
    position[e] = isXTurn ? "X" : "O";
    setNum(position);
    setIsXTurn(!isXTurn);

   

  };

  const isWinner = checkWinner();

  const handlereset=()=>{
    setNum(Array(9).fill(null))
  }

  return (
    <>
  
      <div className="container text-center">
        {isWinner ? (
          <div className='winner'>{isWinner} Won the Game.
          <button className='clickBtn' onClick={handlereset}>Play Again.</button>
          </div>
        ) : (
          <div>
              <h3 >Player {isXTurn ? "X":"O"} turn.</h3>
            <div className="row">
              <div onClick={() => handleClick(0)} className="col">
                <Square value={num[0]} />
              </div>
              <div onClick={() => handleClick(1)} className="col">
                <Square value={num[1]} />
              </div>
              <div onClick={() => handleClick(2)} className="col">
                <Square value={num[2]} />
              </div>
            </div>
            <div className="row">
              <div onClick={() => handleClick(3)} className="col">
                <Square value={num[3]} />
              </div>
              <div onClick={() => handleClick(4)} className="col">
                <Square value={num[4]} />
              </div>
              <div onClick={() => handleClick(5)} className="col">
                <Square value={num[5]} />
              </div>
            </div>
            <div className="row">
              <div onClick={() => handleClick(6)} className="col">
                <Square value={num[6]} />
              </div>
              <div onClick={() => handleClick(7)} className="col">
                <Square value={num[7]} />
              </div>
              <div onClick={() => handleClick(8)} className="col">
                <Square value={num[8]} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Game;
