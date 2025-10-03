import React, { useMemo, useState } from 'react';
import StatusBar from './StatusBar';
import Board from './board/Board';
import Footer from './Footer';

/**
 * PUBLIC_INTERFACE
 * Game is the main container for the Tic Tac Toe game.
 * - Manages board state, turn, winner/draw detection, and reset.
 * - Presents the centered layout with status and controls above/below the grid.
 */
export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winningLine, setWinningLine] = useState(null);

  const player = xIsNext ? 'X' : 'O';

  const outcome = useMemo(() => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (const [a,b,c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: [a,b,c] };
      }
    }
    if (squares.every(Boolean)) {
      return { draw: true };
    }
    return null;
  }, [squares]);

  const status = useMemo(() => {
    if (outcome?.winner) return `Winner: ${outcome.winner}`;
    if (outcome?.draw) return 'It’s a draw!';
    return `Your turn: ${player}`;
  }, [outcome, player]);

  const isGameOver = Boolean(outcome?.winner || outcome?.draw);

  // PUBLIC_INTERFACE
  function handleCellClick(index) {
    if (squares[index] || isGameOver) return;
    const nextSquares = squares.slice();
    nextSquares[index] = player;
    setSquares(nextSquares);

    // compute winner right away to allow highlight
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (const [a,b,c] of lines) {
      if (nextSquares[a] && nextSquares[a] === nextSquares[b] && nextSquares[a] === nextSquares[c]) {
        setWinningLine([a,b,c]);
        setXIsNext(prev => !prev); // flip to maintain consistency though game is over
        return;
      }
    }
    setWinningLine(null);
    setXIsNext(prev => !prev);
  }

  // PUBLIC_INTERFACE
  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinningLine(null);
  }

  return (
    <section className="game-shell" aria-label="Tic Tac Toe Game">
      <header className="game-header">
        <h1 className="title">
          <span className="logo-badge" aria-hidden>◎</span>
          Tic Tac Toe
        </h1>
      </header>

      <div className="game-content">
        <StatusBar
          status={status}
          player={player}
          gameOver={isGameOver}
          onReset={resetGame}
        />

        <div className="board-wrap">
          <Board
            squares={squares}
            onCellClick={handleCellClick}
            winningLine={winningLine || outcome?.line || null}
            gameOver={isGameOver}
          />
        </div>

        <div className="info-panel">
          {outcome?.winner && (
            <div className="alert alert-success" role="status" aria-live="polite">
              🏆 Player {outcome.winner} wins!
            </div>
          )}
          {outcome?.draw && (
            <div className="alert alert-info" role="status" aria-live="polite">
              🤝 It’s a draw. Try again!
            </div>
          )}
          {!isGameOver && (
            <div className="alert alert-info" role="status" aria-live="polite">
              Next move: <strong>{player}</strong>
            </div>
          )}
        </div>
      </div>

      <Footer onReset={resetGame} />
    </section>
  );
}
