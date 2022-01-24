/*
 * @lc app=leetcode.cn id=494 lang=typescript
 *
 * [494] 目标和
 */

// @lc code=start
function findTargetSumWays(nums: number[], target: number): number {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  // 可以把nums里面分成正数组left和负数组right
  // left- right = target => left - (sum-left) = target
  let left = (target + sum) / 2;

  // 目标值超过和，直接为0
  if (Math.abs(target) > sum) {
    return 0;
  }

  // 目标+和除以2为小数，无法满足条件
  if ((target + sum) % 2 === 1) {
    return 0;
  }

  // dp的定义为0到i的元素，正好塞满j容量的背包所包含的方式有多少种
  let dp = new Array(nums.length)
    .fill(0)
    .map(() => new Array(left + 1).fill(0));
  // 容量为0时候只有1种方法，就是什么都没法放
  dp[0][0] = 1;

  // 初始化第一行：第一个元素就等于当前容量，那么第一个元素，能够填满left容量背包的方式有1种
  for (let j = 0; j <= left; j++) {
    if (nums[0] === j) {
      // 这里如果是[0,0,0,0,0,0,0,0,1]，那么需要在当前存在次数的基础上+1
      // 所以不是等于，而是 + 1
      dp[0][j] += 1;
    }
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= left; j++) {
      // 容量小于当前元素的体积
      if (j < nums[i]) {
        // 则方式种数跟不放入i时候的一致
        dp[i][j] = dp[i - 1][j];
      } else {
        // 容量大于当前元素
        // 种数 = 不需要nums[i]就可填满背包的情况数量 + 需要nums[i]填满背包的情况数量
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i]];
      }
    }
  }

  return dp[nums.length - 1][left];
}
// @lc code=end
