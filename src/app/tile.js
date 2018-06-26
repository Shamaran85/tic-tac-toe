import React from 'react';

export default function Tile(props) {

    let setTileClass = '';

    return (
        props.board.map((position, index) => {

            if (position === 1) {
                setTileClass = 'tile plr1';
            } else if (position === 2) {
                setTileClass = 'tile plr2';
            } else {
                setTileClass = 'tile';
            }

            for (let i of props.line) {
                if (i === index) {
                    setTileClass += ' line';
                }
            }
            return (
                <div className={setTileClass} id={index} key={index} onClick={props.onClick}></div>
            )
        })
    )
}

/*
The Tile component expects to be passed
- piece: a valid board value:
  - 0: an empty square
  - 1: plr1 has a piece here
  - 2: plr2 has a piece here
- callback: a function that it'll call when clicked
- line: a boolean, true if tile was part of winning line (STRETCH TASK)
The tile should render with the classes...
- tile: always
- plr1: if has a plr1 piece
- plr2: if has a plr2 piece
- line: if it was part of a winning line (STRETCH TASK)
*/