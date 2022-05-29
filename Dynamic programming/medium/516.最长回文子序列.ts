/*
 * @lc app=leetcode.cn id=516 lang=typescript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
function longestPalindromeSubseq(s: string): number {
  // dp[i][j]的定义，下标i到j的区间内的最长公共序列
  let dp = new Array(s.length).fill(1).map(() => new Array(s.length).fill(1));

  // 状态转移方程设计到i+1，所以建议从下往上遍历，从做往右遍历
  // 遍历方法与5.最长回文子串.ts一致

  // 这里的核心是从右往左依次扩大统计范围
  // 因为dp[i][j]的递推公式需要用到dp[i+1][j] 以及dp[i + 1][j - 1]
  // dp[i+1][j] 以及dp[i + 1][j - 1]是当前dp[i][j]内部右侧的内容

  // 这里需要保证计算dp[i][j]时候，dp[i+1][j] 以及dp[i + 1][j - 1]已经是被计算过的值
  // 所有从length-1到length，length-2到length，一直到0到length，这样扩大范围遍历
  // 才能保证dp[i][j]内部右侧子集已经是被计算过的

  // 如果从0开始遍历扩大范围，实际上推导dp[i][j]时候
  // dp[i+1][j] 以及dp[i + 1][j - 1]还是初始化时候的1，而不是推导过得正确的值
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      // 当前左右字符串相等
      if (s[i] === s[j]) {
        // 左右中间没有元素，或者左右就是同一个下标
        if (j - i <= 1) {
          // 直接相减，得到回文子串长度
          dp[i][j] = j - i + 1;
        } else {
          // 左右区间中间存在子元素，利用子元素区间的最大子序列长度dp[i + 1][j - 1] + 2，加左右2个元素
          dp[i][j] = dp[i + 1][j - 1] + 2;
        }
      } else {
        // 左右不相等，那么取左边区间-1到右边区间，以及左边区间到右边区间-1的最大值
        // 这里可以这样理解
        // 判断i下标的元素是否与j-1相等，这时候区间是[i][j - 1]，最大子序列是dp[i][j - 1]
        // 判断j下标的元素是否与i+1相等，这时候区间是[i + 1][j]，最大子序列是dp[i + 1][j]
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  // 获取0到最有一个元素区间的最大子序列长度
  return dp[0][s.length - 1];
}
// @lc code=end
