/*
 * @lc app=leetcode.cn id=1004 lang=typescript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
function longestOnes(nums: number[], k: number): number {
  let startIndex = 0
  let endIndex = 0
  let max = 0
  // 使用双指针遍历
  for (; endIndex < nums.length; endIndex++) {
    // 右指针为0
    if (nums[endIndex] === 0) {
      // 此时k为0，说明左右指针之间有k+1个0
      // 因为上一次k--时候，k已经是0了，这时候endIndex又为0，相当于多了一个0
      if (k === 0) {
        // 这时候左侧移动到下一个0元素
        while (nums[startIndex] === 1) {
          startIndex++
        }
        // 一道道下一个0元素，因为，有k+1个0，所以，需要startIndex++
        startIndex++
      } else {
        // 双指针之间不足K个0，持续k--
        k--
      }
    }

    // max为左右区间中小于等于k个0时候的差值，因为是计算长度，所以index计算完需要+1
    // PS:小于k个0也需要长度，因为有可能整个长度中都不足k个0
    max = Math.max(max, endIndex - startIndex + 1)
  }

  return max
}
// @lc code=end

