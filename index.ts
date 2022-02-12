
// @lc code=start
function sortColors(nums: number[]): void {
  let left = 0, i = 0
  let right = nums.length - 1

  while (i < nums.length) {
    // 当前数等于0
    if (nums[i] === 0 && i > left) {
      // 左边有位置，把0往左移
      [nums[left], nums[i]] = [nums[i], nums[left]]
      left++
    } else if (nums[i] === 2 && i < right) {
      // 右边有位置，把2往右移
      [nums[right], nums[i]] = [nums[i], nums[right]]
      right--
    } else {
      // nums[i] 等于1，不作任何处理，处理完0和2,1肯定在正确的位置
      i++
    }
  }
};
sortColors([2, 0, 2, 1, 1, 0])
// @lc code=end

