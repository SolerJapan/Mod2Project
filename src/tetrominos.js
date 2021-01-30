// creating the tetris pieces
export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0' },
    I: {
      shape: [[0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0]], //long I block
      color: '80, 227, 230',  
    },
    J: { shape: [[0, 'J', 0], [0, 'J', 0], ['J', 'J', 0]], color: '36, 95, 223' }, // j block
    L: {
      shape: [[0, 'L', 0], [0, 'L', 0], [0, 'L', 'L']],
      color: '223, 173, 36',
    },
    O: { shape: [['O', 'O'], ['O', 'O']], color: '223, 217, 36' }, // square block  
    S: { shape: [[0, 'S', 'S'], ['S', 'S', 0], [0, 0, 0]], color: '48, 211, 56' }, // S block  
    T: {
      shape: [[0, 0, 0], ['T', 'T', 'T'], [0, 'T', 0]], // T shape block block  
      color: '132, 61, 198',
    },
    Z: { shape: [['Z', 'Z', 0], [0, 'Z', 'Z'], [0, 0, 0]], color: '227, 78, 78' }, // reverse S block  
  };
  // function to call the tetris pieces in random order             
  export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZ'; // this is the blocks that will be in use  from the above called
    const randTetromino =
      tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
  };