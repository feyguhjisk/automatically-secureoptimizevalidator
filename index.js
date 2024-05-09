function isMatch(s, p) {
  const dp = Array.from(Array(s.length + 1), () =>
    Array(p.length + 1).fill(false),
  );
  dp[0][0] = true;
  for (let i = 1; i <= p.length; i++) {
    if (p[i - 1] === "*") {
      dp[0][i] = dp[0][i - 2];
    }
  }
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === "*") {
        dp[i][j] = dp[i][j - 2];
        if (p[j - 2] === "." || s[i - 1] === p[j - 2]) {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      }
    }
  }
  return dp[s.length][p.length];
}
