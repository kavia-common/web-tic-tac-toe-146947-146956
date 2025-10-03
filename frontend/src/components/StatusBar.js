import React from 'react';

/**
 * PUBLIC_INTERFACE
 * StatusBar displays current game status and control buttons.
 */
export default function StatusBar({ status, player, gameOver, onReset }) {
  return (
    <div className="status-bar">
      <div className="status-chip" aria-live="polite">
        {gameOver ? 'Game Over' : 'Playing'} • {status}
      </div>
      <div className="controls">
        <button type="button" className="btn btn-outline" onClick={onReset} aria-label="Reset Game (Top)">
          Reset Game
        </button>
        <span
          className="btn btn-primary"
          aria-label={`Current player is ${player}`}
          role="status"
        >
          Player: {player}
        </span>
      </div>
    </div>
  );
}
