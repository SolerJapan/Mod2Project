import React from 'react';
import { StyledDisplay } from './style/StyledDisplay';

//declaration to display game over should the condition be met
const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;