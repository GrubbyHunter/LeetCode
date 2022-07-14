/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = []
  const used: boolean[] = new Array(candidates.length).fill(false)

  const backTracking = (sum: number, arr: number[], start: number) => {
    if (sum === target) {
      result.push([...arr])
      return
    }

    if (sum > target) {
      return
    }

    // 剪枝操作
    for (let i = start; i < candidates.length && target >= candidates[i] + sum; i++) {
      // 如果当前元素等于上一个元素，同时上一个元素没有被使用，则跳过此元素，以免发生重复
      // 因为此时两个一样的元素在同一次遍历中，会引发重复
      if (i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] === false) {
        continue
      }
      // 同一次回溯中，记录当前下标使用过
      used[i] = true
      arr.push(candidates[i])
      backTracking(sum + candidates[i], arr, i + 1)
      used[i] = false
      arr.pop()
    }
  }

  candidates = candidates.sort((a, b) => a - b)
  backTracking(0, [], 0)

  return result
};
// @lc code=end

