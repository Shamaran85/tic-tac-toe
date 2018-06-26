import React from 'react';

export default function Message(props) {

  let statusText = '';

  if (props.status === 'plr1') {
    statusText = 'Player 1';
  } else if (props.status === 'plr2') {
    statusText = 'Player 2';
  } else if (props.status === 'plr1won') {
    statusText = 'Player 1 wins!';
  } else if (props.status === 'plr2won') {
    statusText = 'Player 2 wins!';
  } else if (props.status === 'draw') {
    statusText = 'It\'s a Draw!';
  }

  return (
    <div className="statusMessage">{statusText}</div>
  );
}

/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)
The component will then render an appropriate message.
*/