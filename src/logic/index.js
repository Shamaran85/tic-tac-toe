export const newGame = () => ({
  status: 'plr1',
  board: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  active: true,
  moves: 0,
  line: []
});

export const makeMove = (state, position) => {

  if (state.board[position] === 0 && state.active) {

    let gameState = {
      status: state.status,
      board: state.board,
      active: state.active,
      moves: state.moves,
      line: state.line
    };

    let playerTurn = gameState.status === 'plr1' ? 1 : 2;
    let tileId = document.getElementById(position);


    tileId.innerText = playerTurn === 1 ? 'X' : 'O';
    gameState.board[position] = playerTurn;
    gameState.moves++;
    gameState['status'] = gameState.status === 'plr1' ? 'plr2' : 'plr1';

    let result = checkWinner(gameState);

    if (result.winner === 1) {
      gameState['active'] = false;
      gameState['status'] = 'plr1won';
      gameState['line'] = result.line;
    } else if (result.winner === 2) {
      gameState['active'] = false;
      gameState['status'] = 'plr2won';
      gameState['line'] = result.line;
    } else if (gameState.moves === 9) {
      gameState['active'] = false;
      gameState['status'] = 'draw';
    }

    let updateGame = Object.assign(gameState, {
      status: gameState.status,
      board: gameState.board,
      moves: gameState.moves,
      active: gameState.active,
      line: gameState.line,
    });

    // Testing Purpose
    // console.log('Game State:  ' +
    //   'Player: ' + gameState.status +
    //   '  -  Moves: ' + gameState.moves +
    //   '  -  Board: ' + gameState.board +
    //   '  -  TileID: ' + position +
    //   '  -  Active: ' + gameState.active +
    //   '  -  Line: ' + gameState.line
    // );

    return updateGame
  }
  return null
}


function checkWinner(gameState) {
  let winnerInfo = {
    line: [],
    winner: undefined
  }

  let winMoves = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  let winBoard = gameState.board;
  for (let i = 0; i < winMoves.length; i++) {
    if (winBoard[winMoves[i][0]] === winBoard[winMoves[i][1]] && winBoard[winMoves[i][1]] === winBoard[winMoves[i][2]]) {
      return { ...winnerInfo, line: winMoves[i], winner: winBoard[winMoves[i][0]] }
    }
  }
  return winnerInfo
}



// ---------- A tictactoe gaming library! ------------

/*
A game is an object with...
- state: a string describing the current state:
  - 'plr1': It is player 1's turn to play
  - 'plr2': It is player 2's turn to play
  - 'plr1won': Game over, the first player won
  - 'plr2won': Game over, the second player won
  - 'draw': Game over, nobody won
- board: An array of 9 numbers, each of which are either:
  - 0: An empty square
  - 1: Player 1 has a marker here
  - 2: Player 2 has a marker here
- line: an array of all positions involved in the win, otherwise empty array (STRETCH TASK)
The board array goes from top left to bottom right. For example, the array
[0,1,2,1,2,0,1,0,2] represents this board:
  .---.---.---.
  |   | 1 | 2 |
  |---+---+---|
  | 1 | 2 |   |
  |---+---+---|
  | 1 |   | 2 |
  '---'---'---'
*/

/*
The newGame function will return a valid new game object.
*/




/*
The makeMove function should be called with...
- game: A valid game object
- pos: A number 0-8 corresponding to where we want to play
It will return a new game object. If the move was invalid
(because the position was already taken or the game is over),
an unchanged game will be returned.
*/