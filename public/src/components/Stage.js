import React from 'react';
import { StyledStage } from './style/StyledStage';

import Cell from './Cell';

// the declaration for the stage uses the stage style above
const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;