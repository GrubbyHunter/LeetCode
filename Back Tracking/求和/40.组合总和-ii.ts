/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  const result = []

  const backTracking = (sum: number, arr: number[], start: number) => {
    if (sum === target) {
      result.push([...arr])
      return
    }

    if (sum > target) {
      return
    }
    const used: any = {}
    // 剪枝操作
    for (let i = start; i < candidates.length && target >= candidates[i] + sum; i++) {
      // 如果当前元素等于上一个元素，同时上一个元素没有被使用，则跳过此元素，以免发生重复
      // 因为此时两个一样的元素在同一次遍历中，会引发重复
      if (i > 0 && candidates[i] === candidates[i - 1] && !used[i - 1]) {
        continue
      }

      sum += candidates[i]
      arr.push(candidates[i])
      // 记录当前元素被使用
      used[i] = true
      backTracking(sum, arr, i + 1)

      // 回溯操作
      sum -= candidates[i]
      arr.pop()
    }
  }

  candidates = candidates.sort((a, b) => a - b)
  backTracking(0, [], 0)

  return result
};
// @lc code=end

