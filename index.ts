// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function increasingTriplet(nums: number[]): boolean {
  let dp = new Array(nums.length).fill(1)
  let max = 1
  dp[0] = 1

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 第i个数和从0开始到j个数，也就是（i-1）个数
      // 依次比较
      if (nums[i] > nums[j]) {
        // 大于nums[j]的话，0-j的最大连续长度为dp[j]
        // 所以要在dp[j]的基础上+1
        // 并统计这期间的最大值
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    // 每次遍历完或取较大值
    max = Math.max(dp[i], max)
  }

  return max >= 3
};
increasingTriplet([20, 100, 10, 12, 5, 13])