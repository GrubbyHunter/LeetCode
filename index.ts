/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
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

  let dp = new Array(s.length).fill(0);
  dp[0] = 1;

  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (isSubstring(s.substring(j, i + 1))) {
        dp[i] += 1;
      }
    }
    dp[i] += dp[i - 1];
  }

  return dp[dp.length - 1];
}
countSubstrings("abc");
// @lc code=end
