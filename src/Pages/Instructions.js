import React from 'react';
import { Link } from 'react-router-dom'
//this is the part that post the instructions once clicked
const Instructions = () => {
    return (
        <>
           <Link to='/'> Remove </Link>
           <br /> <h3>How to play</h3>
            <p>Hit Start to start the game. this doubles as a reset button.</p> 
            <p>press up on the keyboard to rotate and down to accelerate</p>
            <p>press left and right keys to move the pieces</p>
        </>
    )
}

export default Instructions;