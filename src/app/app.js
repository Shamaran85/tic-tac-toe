import React from 'react';
import { newGame, makeMove } from '../logic';
import Message from './message';
import Tile from './tile';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = newGame();
    }

    handleClick(e) {
        this.setState(makeMove(this.state, e.currentTarget.id));
    }

    handleRestart(e) {
        let board = document.getElementById("theGame").querySelectorAll(".tile");
        for (let tile of board) {
            tile.innerHTML = '';
        }
        this.setState(newGame());
    }

    render() {
        return (
            <div id="theGame">
                <h2>Tic Tac Toe</h2>
                <Message status={this.state.status} />
                <div className="board">
                    <Tile
                        board={this.state.board}
                        line={this.state.line}
                        onClick={(e) => this.handleClick(e)}
                    />
                </div >
                <button onClick={(e) => this.handleRestart(e)}>Restart</button>
            </div>
        );
    }
}

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.
Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.
The user should also be able to reset the game.
The App component should render an outer element with a `container` CSS class,
and all tiles in an element with a `board` CSS class.
*/