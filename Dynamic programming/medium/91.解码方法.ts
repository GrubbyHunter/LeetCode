/*
 * @lc app=leetcode.cn id=91 lang=typescript
 *
 * [91] 解码方法
 */

// @lc code=start
function numDecodings(s: string): number {
  // dp[i]表示前i-1个字符有多少种可能
  // 这里是前i-1个，不是前i个，主要是方便进行dp公式从i-1递推i
  let dp = new Array(s.length + 1).fill(0)

  if (s.length === 0) {
    return 0
  }
  if (s.length === 1) {
    return s[0] === "0" ? 0 : 1
  }

  // 初始化DP0，0也是一种可能
  dp[0] = 1

  for (let i = 0; i < s.length; i++) {
    // 记录0到i-1存在的种数
    let preCount
    if (s[i] === "0") {
      // 当前字符为0，那么0到i-1的种数初始化为0
      preCount = 0
    } else {
      // 不为0，那么0到i-1的种数初始化为0到i-1的种数，也就是dp[i]
      preCount = dp[i]
    }

    // s[i-1]和 s[i]组合起来的数字在1到26之间
    if (i > 0 && (s[i - 1] === "1" || (s[i - 1] === "2" && s[i] <= "6"))) {
      // 那么存在种数 = 0到i-1存在的种数 + 0到i-2存在的种数
      dp[i + 1] = preCount + dp[i - 1]
    } else {
      // 存在种数 = 0到i-1存在的种数
      dp[i + 1] = preCount
    }
  }

  return dp[s.length]
};
// @lc code=end

