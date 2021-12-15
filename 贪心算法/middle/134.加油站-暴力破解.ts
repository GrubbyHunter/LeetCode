/*
 * @lc app=leetcode.cn id=134 lang=typescript
 *
 * [134] 加油站
 */

// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let currentSum = 0

  for (let i = 0; i < gas.length; i++) {
    let index = i
    // 遍历N次
    for (let j = 0; j < gas.length; j++) {
      // 上次油量+当前油量 小于消耗油量，无法到达下一个加油站
      if (currentSum + gas[index] < cost[index]) {
        currentSum = 0
        break
      }
      // 计算新的当前油量
      currentSum += gas[index] - cost[index]

      // 在计算下一个加油站的下标
      if (index === gas.length - 1) {
        index = 0
      } else {
        index++
      }

      // 跑了一圈到达气垫，符合条件
      if (j === gas.length - 1) {
        return index
      }
    }
  }

  return -1
};
// @lc code=end

