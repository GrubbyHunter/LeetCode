// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function maxSubarraySumCircular(nums: number[]): number {
  let max = Number.MIN_SAFE_INTEGER
  let min = Number.MAX_SAFE_INTEGER
  let sum = 0
  let currentMax = 0
  let currentMin = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    currentMax = currentMax + nums[i]
    currentMin = currentMin + nums[i]

    if (currentMax > max) {
      max = currentMax
    }

    if (currentMin < min) {
      min = currentMin
    }

    if (currentMax < 0) {
      currentMax = 0
    }

    if (currentMin > 0) {
      currentMin = 0
    }
  }

  return max > 0 ? Math.max(max, sum - min) : max;
};
maxSubarraySumCircular([-3, -2, -3]);
