/*
 * @lc app=leetcode.cn id=343 lang=typescript
 *
 * [343] 整数拆分
 */

// @lc code=start
function integerBreak(n: number): number {
  // 填充+1个0的数组，dp[i]表示当前下标的最大乘积
  // 这里n+1是为了下标和数字保持一致，方便计算
  let dp = new Array(n + 1).fill(0)
  // 由于题目中的条件n是大于1的，所以初始化时候直接初始化从2开始
  dp[2] = 1 // 1 * 1

  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      // 这里 获取dp[i]的所有方式：(i-1)*1,(i-2)*2,(i-3)*3, (i-3)*2*1等等
      // 我们把它归类为两种
      // 第一种，拆分成两个数相乘 (i-x)*x
      // 第二种，拆分成两个以上的树相乘j * dp[i - j]，这里j是第一个数
      //         dp[i-j]是之前多个数乘积最大的，可以看做多个数
      //         然后相当于遍历这几种场景，取之前dp[i]最大数和现在两种情况的最大数来比较
      //         保存最大的那个
      // 例如 n = 4 ，那么取，1*3，1*dp[3]，这个dp[3]相当于1*1*1 和1*2，都包含进去了
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
    }
  }

  return dp[n]
};
// @lc code=end

