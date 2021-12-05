/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const result = []
  if (nums.length === 0) {
    return result
  }

  if (nums.length === 1) {
    return [[], nums]
  }

  // 数组升序排列
  nums = nums.sort((a, b) => a - b)
  const backTracking = (arr: number[], start: number) => {
    result.push([...arr])
    if (startIndex >= nums.size()) {
      return;
    }
    for (let i = start; i < nums.length; i++) {
      arr.push(nums[i])
      backTracking(arr, i + 1)
      arr.pop()
    }
  }

  backTracking([], 0)

  return result
};
// @lc code=end

