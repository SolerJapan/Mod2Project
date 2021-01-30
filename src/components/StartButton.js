import React from 'react';
import styled from 'styled-components';

//styling for the start button
const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 10%;
  border-radius: 20px;
  border: none;
  color: white;
  background: #336;
  position: absolute;
  top: 300px;
  left: 830px;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`;

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;