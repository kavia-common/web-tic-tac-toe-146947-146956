import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Footer provides secondary controls and brief info.
 */
export default function Footer({ onReset }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <small>Two-player local game • {year}</small>
      <div className="controls">
        <button type="button" className="btn btn-outline" onClick={onReset} aria-label="Reset Game (Bottom)">
          Reset Game
        </button>
      </div>
    </footer>
  );
}
