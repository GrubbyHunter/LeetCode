/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  let map = {}
  let max = 0

  for (let num of nums) {
    // 如果map中已经存在，直接返回
    // 1是避免重复计算，2是保证num元素左右两边都没跟他连起来过
    if (map[num]) {
      continue
    }
    // 初始化当前元素的连续长度
    map[num] = 1

    let leftIndex = num
    let rightIndex = num
    let length = 1 // 自身长度

    // num的左边存在连续的元素
    if (map[num - 1]) {
      // 当前元素的值 - 左边元素的长度 = 到达最左边的下标
      leftIndex = num - map[num - 1]
      // 当前长度 + 最左边元素长度
      length += map[leftIndex]
    }


    // num的右存在连续的元素
    if (map[num + 1]) {
      // 当前元素的值 + 右边元素的长度 = 到达最右边的下标
      rightIndex = num + map[num + 1]
      // 当前长度 + 最左边元素长度
      length += map[rightIndex]
    }

    // 将最左边和最右边的连续长度更新
    // 这里每次计算只计算连续长度的最左边和最右边即可
    // 因为map中中间元素的最大连续长度跟他们一样
    map[leftIndex] = length
    map[rightIndex] = length

    max = Math.max(max, length)
  }

  return max
};
// @lc code=end

