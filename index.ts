// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
function subarraySum(nums: number[], k: number): number {
  let count = 0
  let left = 0, right = 0
  let sum = 0

  while (left < nums.length) {
    while (right < nums.length) {
      if (sum < k) {
        sum += nums[right]
        right++
        continue
      }

      if (sum >= k) { break }
    }

    if (sum === k) {
      count++
    }

    left++
    sum = sum - nums[left]
  }

  return count
};
subarraySum([1, 1, 1], 2)
// @lc code=end
