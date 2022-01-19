/*
 * @lc app=leetcode.cn id=647 lang=typescript
 *
 * [647] 回文子串
 */

// @lc code=start
function countSubstrings(s: string): number {
  // 判断是否是会问字符串
  let isSubstring = (s: string) => {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  // dp[i]的含义为0到i下标字符串的会问子串数量，复杂度O(N3)
  let dp = new Array(s.length).fill(0);
  dp[0] = 1;

  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      // 从0-j到i+1依次判断是否是会问，是的话就+1
      if (isSubstring(s.substring(j, i + 1))) {
        dp[i] += 1;
      }
    }
    dp[i] += dp[i - 1];
  }

  return dp[dp.length - 1];
}
// @lc code=end
