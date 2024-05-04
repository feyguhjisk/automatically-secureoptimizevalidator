function lengthOfLongestSubstring(s) {
  if (s.length === 0) return 0;
  const map = new Map();
  let maxLength = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) left = Math.max(left, map.get(s[right]) + 1);
    map.set(s[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
