import styled from 'styled-components';

// importing Background Image
import bgImage from '../../img/bg.png';

//styling for the background
export const StyledTetrisWrapper = styled.div`
  width: 250vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: wrap;
  overflow: hidden;
`;

//styling for the score, level, and rows boards
export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;