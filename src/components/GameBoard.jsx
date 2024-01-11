import { useState } from "react";

const gameBox = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({selectCurPlayer,activePlayerSymbol}) {
  const [gameBoard, setGameBoard] = useState(gameBox);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray])];
        updatedBoard[rowIndex][colIndex]={activePlayerSymbol};
        return updatedBoard;
    });
    selectCurPlayer();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
