function longestIncreasingPath(matrix) {
  if (matrix.length === 0) return 0;
  const rows = matrix.length;
  const cols = matrix[0].length;
  const dp = Array.from(Array(rows), () => Array(cols).fill(0));
  let longestPath = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      longestPath = Math.max(longestPath, dfs(matrix, i, j, dp));
    }
  }
  return longestPath;
  function dfs(matrix, i, j, dp) {
    if (dp[i][j] !== 0) return dp[i][j];
    const dirs = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    let maxPath = 1;
    for (const dir of dirs) {
      const newRow = i + dir[0];
      const newCol = j + dir[1];
      if (
        newRow >= 0 &&
        newRow < matrix.length &&
        newCol >= 0 &&
        newCol < matrix[0].length &&
        matrix[newRow][newCol] > matrix[i][j]
      ) {
        maxPath = Math.max(maxPath, 1 + dfs(matrix, newRow, newCol, dp));
      }
    }
    dp[i][j] = maxPath;
    return maxPath;
  }
}
