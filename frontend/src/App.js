import React from 'react';
import './App.css';
import './index.css';
import Game from './components/Game';

/**
 * PUBLIC_INTERFACE
 * App is the root component that renders the Tic Tac Toe Game.
 */
function App() {
  return (
    <div className="app-root">
      <Game />
    </div>
  );
}

export default App;
