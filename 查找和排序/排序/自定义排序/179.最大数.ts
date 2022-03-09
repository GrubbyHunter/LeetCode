/*
 * @lc app=leetcode.cn id=179 lang=typescript
 *
 * [179] 最大数
 */

// @lc code=start
function largestNumber(nums: number[]): string {
  // 自定义排序，将xy最大的数放最左边进行降序排列
  // 例如 [9,2,81,45]
  // 排完981最大，肯定在最左边，8245第二大
  // 实际上只要排完最左边，右边继续排跟左边就没关系了
  nums = nums.sort((x, y) => {
    return parseInt(`${y}${x}`) - parseInt(`${x}${y}`)
  })

  let str = ""
  let i = 0

  // 过滤掉左边的0
  while (nums[i] === 0) {
    if (i === nums.length - 1) {
      return "0"
    }
    i++
  }

  // 从第一个不为0的数开始遍历
  for (; i < nums.length; i++) {
    str += nums[i]
  }
  return str
};
// @lc code=end

