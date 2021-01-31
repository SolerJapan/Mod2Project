
import React, { useState } from 'react';

//calling the stage and collision detection
import { createStage, checkCollision } from '../gameHelpers';

// calling styles for board and background
import { StyledTetrisWrapper, StyledTetris } from './style/StyledTetris';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import PauseButton from './PauseButton';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  console.log('re-render');
  //x is set to left and right while y controls if you got down as you move left or right
  //interval ticks are still going on as left and right are being pressed
  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      // Activate the interval again when down arrow is released.
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1));
      }
    }
  };

  const startGame = () => {
    // doubles as Reset 
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
  };
  // new function pauses the game
  const pauseGame = () => {
    
     if(dropTime > 0 )
     {
      setDropTime(null);
     }
     else{
         
        if(level > 0){
          setDropTime(1000 / (level + 1) + 200);
        }
        else{
          setDropTime(1000);
        }
         
     }
  }

  const drop = () => {
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      // Also increase speed
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game over!
      if (player.pos.y < 1) {
        console.log('GAME OVER!!!');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    // We don't need to run the interval when we use the arrow down to
    // move the tetromino downwards. So deactivate it for now.
    setDropTime(null);
    drop();
  };

  // This one starts the game
  useInterval(() => {
    drop();
  }, dropTime);

  //the control setting for the game
  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {// left key arrow
        movePlayer(-1);
      } else if (keyCode === 39) {// right key arrow
        movePlayer(1);
      } else if (keyCode === 40) {// down key arrow
        dropPlayer();
      } else if (keyCode === 38) {//up key arrow
        playerRotate(stage, 1);
      }//cheats
        else if (keyCode === 115) {//f4 key arrow
          setLevel(level + 1 );
      } else if (keyCode === 113) {//f2 key arrow
        setScore(score + 1000);
      }
    }
  };

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={e => move(e)} 
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Bodied" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} /> {/*displays the score by score value */}
              <Display text={`rows: ${rows}`} />   {/*displays the rows created by rows value */}
              <Display text={`Level: ${level}`} /> {/*displays the game  by level value */}
            </div>
          )}
          <PauseButton callback={pauseGame} />
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;