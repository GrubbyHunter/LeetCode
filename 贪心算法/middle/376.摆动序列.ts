/*
 * @lc app=leetcode.cn id=376 lang=typescript
 *
 * [376] 摆动序列
 */
function wiggleMaxLength(nums: number[]): number {
  let result = 1
  // 少于两个元素，不用判断，直接返回数组长度
  if (nums.length === 1) {
    return result
  }

  // 前一个差值
  let perDiff = 0
  // 当前差值
  let curDiff = 0

  // 数组从第三个数还是判断
  for (let i = 0; i < nums.length - 1; i++) {
    curDiff = nums[i + 1] - nums[i]
    // 这里curDiff 等于0的话当前树和下一个数相等
    // 直接跳到下一个数，不进行任何操作
    if (curDiff === 0) {
      continue
    }

    // 前面大于0，后面小于0，满足条件
    if (perDiff >= 0 && curDiff < 0) {
      perDiff = curDiff
      result++
      continue
    }

    // 前面小于于0，后面大于0，满足条件
    if (perDiff <= 0 && curDiff > 0) {
      perDiff = curDiff
      result++
    }
  }

  return result
};
// @lc code=end

