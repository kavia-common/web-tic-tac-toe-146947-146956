import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Cell renders one grid cell and handles click events.
 */
export default function Cell({ index, value, onClick, disabled, isWinning }) {
  const classNames = [
    'cell',
    value === 'X' ? 'x' : value === 'O' ? 'o' : '',
    disabled ? 'disabled' : '',
    isWinning ? 'win' : '',
    value ? 'pulse-in' : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={classNames}
      aria-label={`Cell ${index + 1}${value ? ` contains ${value}` : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
}
