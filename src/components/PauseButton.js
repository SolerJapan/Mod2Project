import React from 'react';
import styled from 'styled-components';

// new styling for the pause button
const StyledPauseButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 10%;
  border-radius: 20px;
  border: none;
  color: white;
  background: #633;
  position: absolute;
  top: 200px;
  left: 830px;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`;

const PauseButton = ({ callback }) => (
  <StyledPauseButton onClick={callback}>Pause</StyledPauseButton>
);

export default PauseButton;