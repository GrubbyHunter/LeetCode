/*
 * @lc app=leetcode.cn id=45 lang=typescript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
function jump(nums: number[]): number {
  let count = 0
  // 当前范围起始下标
  let startIndex = 0
  // 当前范围结尾下表
  let endIndex = 0

  if (nums.length === 1) {
    return 0
  }

  // 结尾下标如果超过数组最后一个元素，则到达结尾，直接返回步数
  while (endIndex < nums.length - 1) {
    let i = startIndex
    let j = endIndex
    // 遍历当前范围内每个元素能到达的下一个范围
    for (; i <= j; i++) {
      let coverIndex = nums[i] + i

      if (coverIndex > endIndex) {
        // 纪录最大范围，下一次遍历使用
        endIndex = coverIndex
      }
    }
    // 当前遍历的结束时j，name下一次便利从j+1到新的endIndex
    startIndex = j + 1
    // 记录一次步数
    count++
  }

  return count
};
// @lc code=end

