import { useState, useEffect, useCallback } from 'react';

// overall calculates the score based on rows cleared.
export const useGameStatus = rowsCleared => {
  // declarations for score, rows, and level respectively with hooks
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);
   
  // respective scores for single, double, triple, and quad
  const linePoints = [40, 100, 300, 1200];
// This is how score is calculated
  const calcScore = useCallback(() => {
    
    if (rowsCleared > 0) {
      // This is how score is calculated
      setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1));
      setRows(prev => prev + rowsCleared);
    }
  }, [level, linePoints, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};