/*
 * @lc app=leetcode.cn id=31 lang=typescript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
// @lc code=start
function nextPermutation(nums: number[]): void {
  let i = nums.length - 2

  for (; i >= 0; i--) {
    // 找到比后一个数小的数
    if (nums[i] < nums[i + 1]) {
      // 跳出循环
      break
    }
  }

  if (i === -1) {
    nums.sort((a, b) => a - b)
    return
  }

  let min = nums[i + 1], j = i + 1
  let index = j
  // 找到i+1到length-1之间大于nums[i]且最小的数，记录下标index
  for (; j < nums.length; j++) {
    if (nums[j] > nums[i]) {
      // 这里增加等于，如果两个一样的数，使用靠后的一个，避免影响排序
      // 比如2133，这里如果1跟他后面的3直接换，那么变成了2313，这里13变成了升序
      // 不符合最后一步将降序转化为升序的要求
      // 所以需要先变成2331 => 2313
      if (nums[j] <= min) {
        index = j
        min = nums[j]
      }
    }
  }

  // 将此数与nums[i]交换顺序
  let temp = nums[i]
  nums[i] = nums[index]
  nums[index] = temp

  // 由于之前是从后往前找i比i+1大的位置
  // 所以本身i+1到结尾为降序
  // 调整为升序排序，以便i+1到结尾这部分数最小，最近接之前的序列
  let [left, right] = [i + 1, nums.length - 1]

  while (left < right) {
    // 首尾互换，降序变升序
    [nums[left], nums[right]] = [nums[right], nums[left]]
    left++
    right--
  }
};
// @lc code=end

