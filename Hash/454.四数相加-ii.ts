/*
 * @lc app=leetcode.cn id=454 lang=typescript
 *
 * [454] 四数相加 II
 */

// @lc code=start
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  let count = 0
  // 使用map统计，key为1数组和2数组中所有和，value为和出现的次数
  let map = {}

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      let result = nums1[i] + nums2[j]

      if (!map[result]) {
        map[result] = 1
      } else {
        map[result] = map[result] + 1
      }
    }
  }

  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      let result = 0 - nums3[i] - nums4[j]
      // 满足条件的和已经出现，那么累加他出现的次数
      if (map[result]) {
        count += map[result]
      }
    }
  }

  return count
};
// @lc code=end

