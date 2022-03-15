/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  // 数组生序排
  nums.sort((a: number, b: number) => a - b)

  if (nums.length < 0) {
    return
  } if (nums.length === 3) {
    return nums[0] + nums[1] + nums[2]
  }

  let preSum = nums[0] + nums[1] + nums[2]

  // 求3个数的和，实际上第一个数只需要遍历到倒数第三个数
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1 // 左指针指向第二个数，为i后面一个数
    let right = nums.length - 1 // 右指针指向数组最后一个元素

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      // 统距离target较近的元素
      if (Math.abs(target - sum) < Math.abs(target - preSum)) {
        preSum = sum
      }

      // 相等的话距离为0，当然最近，直接返回
      if (sum === target) {
        return sum
      } else if (sum > target) {
        right--
      } else {
        left++
      }
    }
  }

  return preSum
};
// @lc code=end

