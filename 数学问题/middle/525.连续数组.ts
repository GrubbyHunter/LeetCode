/*
 * @lc app=leetcode.cn id=525 lang=typescript
 *
 * [525] 连续数组
 */

// @lc code=start
function findMaxLength(nums: number[]): number {
  let map = new Map()
  let sum = 0
  let max = 0

  // 将数组中的0变成-1
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      nums[i] = -1
    }
  }

  // 相当于寻找最长连续-1和1数量相同的长度
  // -1 + 1 = 0，所以，只要计算他们的和为0name，name数量就一定一样
  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i]

    // 当前0到i的和为0，说明0-i之间-1和1的个数相同
    if (sum === 0) {
      // 记录长度
      max = i + 1
    }

    // 记录每个和出现的下标
    if (map.get(sum) === undefined) {
      map.set(sum, i)
    } else {
      // 如果当前和已经出现过
      // 说明他上次出现的位置map.get(sum) 与当前i之间的和为0，这之间的-1和1个数相同
      max = Math.max(max, i - map.get(sum))
    }
  }

  return max
};
// @lc code=end

