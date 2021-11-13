/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  let count: number = 0
  let map: any = {}

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

      if (map[result]) {
        count = count + map[result]
      }
    }
  }

  return count
};

fourSumCount([0], [0], [0], [0]);
// @lc code=end

