// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
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
  }

  return left
};
findPeakElement([1, 2, 3, 1])