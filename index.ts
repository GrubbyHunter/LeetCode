/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function jump(nums: number[]): number {
  let count = 0
  let startIndex = 0
  let endIndex = 0


  if (nums.length === 1) {
    return 0
  }

  while (endIndex < nums.length - 1) {
    let i = startIndex
    let j = endIndex

    for (; i <= j; i++) {
      let coverIndex = nums[i] + i

      if (coverIndex > endIndex) {
        endIndex = coverIndex
      }
    }

    startIndex = j + 1
    count++
  }

  return count + 1
};
jump([1, 2, 1, 1, 1])

// @lc code=end

