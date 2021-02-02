import React from 'react';
import { StyledCell } from './style/StyledCell';
import { TETROMINOS } from '../tetrominos';

// renders the cells and uses the styling from StyledCell 
// React.memo is used  re-render the changed cells
const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>
    {console.log('rerender cell')}
  </StyledCell>
);

export default React.memo(Cell);