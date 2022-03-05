/*
 * @lc app=leetcode.cn id=162 lang=typescript
 *
 * [162] 寻找峰值
 */

// @lc code=start
function findPeakElement(nums: number[]): number {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    let mid = Math.floor((left + right) / 2)

    // 由于是Math.floor所以不用担心mid+1数组越界
    // 当前元素右边比他大，那么山顶在右边
    if (nums[mid + 1] > nums[mid]) {
      left = mid + 1
    } else {
      // 当前元素右边比他小，那么山顶在左边
      right = mid
    }

    // 这里注意两点，如果右边一直比左边大，找到最后衣蛾元素，也算峰顶
    // 题目注释不存在nums[i] === nums[i+1]的情况，所以不用处理等于
  }

  // 最后left等于right，返回其中一个即可
  return left
};
// @lc code=end

