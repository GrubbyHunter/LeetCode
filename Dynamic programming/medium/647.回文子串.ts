/*
 * @lc app=leetcode.cn id=647 lang=typescript
 *
 * [647] 回文子串
 */

// @lc code=start
function countSubstrings(s: string): number {
  // dp的定义为下标i到下标j的字符串是否是回文字符串
  let dp = new Array(s.length)
    .fill(false)
    .map(() => new Array(s.length).fill(false));
  let result = 0;

  // 判断：i和j费比恩位于当前字符串的最左边和最右边
  // 1、如果当前下标i和当前下标j字符不相等，那么不是回文字符串
  // 2、如果相等：
  //            2.1 i+1到j-1这个区间为回文字符串，那么加上i和j这两个字符依然是回文字符串
  //            2.2 i+1到j-1这个区间不为回文字符串，那么加上i和j这两个字符也不是回文字符串

  // 这里状态转移方程是dp[i][j] = dp[i + 1][j - 1];
  // 所以列的话可以从大到小开始遍历
  // 整个双层遍历相当于是从下往上，从左往右遍历
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      // 第一种情况
      if (s[i] !== s[j]) {
        dp[i][j] = false
      } else {
        // 2.1种情况，这里如果i=j或者ij只差小于等于1
        // 也就是当前字符串只有1到2个字符，直接判断即可
        if (j - i <= 1) {
          dp[i][j] = true
        } else {
          // 2.2种情况
          dp[i][j] = dp[i + 1][j - 1];
        }

      }
      // 最后dp记录当前i到j的子串是否是回文的状态，是的话总数+1
      // 此题跟暴力解法前面是类似的，不过后面是使用dp二维数组记录之前的子串是否是回文状态
      // 再扩大i和j的范围之后，就可以复用之前的状态，相当于是一种空间换时间的做法
      if (dp[i][j]) {
        result++;
      }
    }
  }

  return result;
}
// @lc code=end
