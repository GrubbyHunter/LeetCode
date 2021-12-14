/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function largestSumAfterKNegations(nums: number[], k: number): number {
  let sum = 0
  let minNumber = Number.MAX_SAFE_INTEGER
  // 首先升序排序树组
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    // 对小于0的数改变为正数
    if (nums[i] < 0) {
      if (k > 0) {
        nums[i] = -nums[i]
        k--
      }

      minNumber = nums[i]
    } else if (nums[i] === 0) {
      minNumber = 0
      if (k > 0) {
        k = 0
      }
    } else {
      // k还剩奇数次
      if (k % 2 !== 0) {
        if (minNumber > nums[i]) {
          minNumber = nums[i]
        }
        sum -= minNumber * 2
        k = 0
      }
    }

    sum += nums[i]
  }

  return sum
};
largestSumAfterKNegations([2, -3, -1, 5, -4], 2)
// @lc code=end

