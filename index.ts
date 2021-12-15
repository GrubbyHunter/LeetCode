/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let currentSum = 0


  for (let i = 0; i < gas.length; i++) {
    let index = i

    for (let j = 0; j < gas.length; j++) {

      if (currentSum + gas[index] < cost[index]) {
        currentSum = 0
        break
      }
      currentSum += gas[index] - cost[index]

      if (index === gas.length - 1) {
        index = 0
      } else {
        index++
      }
      if (j === gas.length - 1) {
        return index
      }
    }
  }

  return -1
};
canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])
// @lc code=end

