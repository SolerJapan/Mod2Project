import styled from 'styled-components';

//styling for the stage and is displayed with a grid

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 1px solid #333;
  width: 100%;
  position: absolute;
  top: 80px;
  max-width: 25vw;
  background: #164;
`;