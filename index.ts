// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function longestOnes(nums: number[], k: number): number {
  let startIndex = 0
  let endIndex = 0
  let max = 0

  for (; endIndex < nums.length; endIndex++) {
    if (nums[endIndex] === 0) {
      if (k === 0) {
        while (nums[startIndex] === 1) {
          startIndex++
        }
        startIndex++
      } else {
        k--
      }
    }

    max = Math.max(max, endIndex - startIndex + 1)
  }

  return max
};
longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);
