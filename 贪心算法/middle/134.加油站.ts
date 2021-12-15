/*
 * @lc app=leetcode.cn id=134 lang=typescript
 *
 * [134] 加油站
 */

// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let currentSum = 0
  let totalSum = 0
  let startIndex = 0

  for (let i = 0; i < gas.length; i++) {
    // 到当前加油站为止剩余的油量
    currentSum += gas[i] - cost[i]
    // 记录跑完所有加油站的剩余油量
    totalSum += gas[i] - cost[i]

    // 如果之前的剩余油量为负数，说明之前0到i个加油站作为起始位置，都跑不到下一个加油站
    // 例如currentSum[0] <0 ,index=0的加油站不行
    // currentSum[0] > 0 currentSum[1] < 0, ,index=1的加油站不行，以此类推
    if (currentSum < 0) {
      // 新的起始加油站下标为i+1
      startIndex = i + 1
      // 之前的和清零
      currentSum = 0
    }
  }

  // 总和都小于0，那么一不完一圈
  if (totalSum < 0) {
    return -1
  }

  return startIndex
};
// @lc code=end

