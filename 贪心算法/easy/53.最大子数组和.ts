/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let maxSum = Number.MIN_SAFE_INTEGER
  let currnetSum = 0
  // 如果连续的区间为负数，那么他与下一个数相加，肯定会拉低和
  // 所以需要放弃，如果一个区间相加变成了负数，那么需要从i+1重新开始统计
  for (let i = 0; i < nums.length; i++) {
    currnetSum = currnetSum + nums[i]

    if (currnetSum > maxSum) {
      maxSum = currnetSum
    }
    // maxSum记录钱买最大的数就好了，如果前面的和为负数，需要重置为0
    if (currnetSum <= 0) {
      currnetSum = 0
    }
  }

  return maxSum
};
// @lc code=end

