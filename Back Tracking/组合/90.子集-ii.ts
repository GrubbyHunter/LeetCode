/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  const result: number[][] = []
  const used = new Array(nums.length).fill(false)

  if (nums.length === 0) {
    return result
  }

  // 升序数组，方便做同批次遍历重复元素的判断
  nums = nums.sort((a, b) => a - b)
  const backTracking = (arr: number[], start: number) => {
    result.push([...arr])

    for (let i = start; i < nums.length; i++) {
      // 当前元素与前一个元素相等，同时前一个元素未使用，那么要跳过
      // 例如 1 2 2
      // 同一轮回溯中，第1个 2 和第2个 2在同一个集合中收集
      // 如果非同一轮回溯，1和第2个2组合的情况，实际上1与第1个2组合时候已经包括了，所以要过滤掉
      // used[i-1] = false 时候表示，第1个 2 和第2个 不在同一轮回溯中需要过滤掉
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
        continue
      }
      // 标记在同一次回溯中使用
      used[i] = true
      arr.push(nums[i])
      backTracking(arr, i + 1)
      // 回溯重置标记为未使用，因为
      used[i] = false
      arr.pop()
    }
  }

  backTracking([], 0)
  return result
};
// @lc code=end

