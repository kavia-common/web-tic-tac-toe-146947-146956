import React from 'react';
import Cell from './Cell';

/**
 * PUBLIC_INTERFACE
 * Board renders the 3x3 grid and delegates click handling.
 */
export default function Board({ squares, onCellClick, winningLine, gameOver }) {
  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe Board">
      {squares.map((value, idx) => {
        const isWinning = winningLine ? winningLine.includes(idx) : false;
        return (
          <Cell
            key={idx}
            index={idx}
            value={value}
            onClick={() => onCellClick(idx)}
            disabled={Boolean(value) || gameOver}
            isWinning={isWinning}
          />
        );
      })}
    </div>
  );
}
