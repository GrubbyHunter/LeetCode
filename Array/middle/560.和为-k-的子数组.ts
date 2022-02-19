/*
 * @lc app=leetcode.cn id=560 lang=typescript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
  let count = 0
  let map = {}
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
    // 从0到i的和等于k，累计次数
    if (sum === k) {
      count++
    }

    // map中记录的是从0到i的和，以及出现的次数
    // 0到10的和  减去 0到5和 = 5到10的和
    // 所以这里0到i的和sum 减去k如果存在于map，说明0到i之间有一个j
    // 0到j就等于sum - k， i到j等于k，所以这里sum-k出现的次数就是当前满足条件和的次数
    // 进行累加统计
    if (map[sum - k]) {
      count = count + map[sum - k]
    }

    // 存在就+1，不存在就记录1，出现了一次
    map[sum] = map[sum] ? map[sum] + 1 : 1
  }

  return count
};
// @lc code=end

