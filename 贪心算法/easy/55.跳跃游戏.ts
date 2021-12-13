/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  let coverIndex = 0
  let i = 0

  // 当前元素的下标已经超过覆盖范围，那么永远不可能达到最后
  while (i <= coverIndex) {
    // 当前元素可覆盖到的下标
    const currentCover = nums[i] + i
    // 超过之前的覆盖范围，则重新设置覆盖范围
    if (currentCover > coverIndex) {
      coverIndex = currentCover
    }

    // 当前的覆盖范围已经超过了最后一个元素的下标
    // 则可以调到最后
    if (coverIndex >= nums.length - 1) {
      return true
    }

    //覆盖范围未达到最后一个元素，
    // 继续计算当前覆盖范围内，下一个元素覆盖范围
    i++
  }

  return false
};
// @lc code=end

