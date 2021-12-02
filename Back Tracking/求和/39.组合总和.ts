/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const result = []

  const backTracking = (arr: number[], sum: number, start: number) => {
    if (sum === target) {
      result.push([...arr])
      return
    }

    if (sum > target) {
      return
    }

    // 已经超过target，不继续计算
    if (candidates[start] + sum > target) {
      return
    }
    // 由于是不能存在重复的
    // 所以第一个数试完之后，第二个数肯定跟第一个数组合试过了
    // 第二个数的回溯从第二个数开始，不用从第一个数开始，这样就不会有重复组合了
    for (let i = start; i < candidates.length; i++) {
      arr.push(candidates[i])
      sum += candidates[i]

      backTracking(arr, sum, i)

      arr.pop()
      sum -= candidates[i]
    }
  }
  // 对数组升序排列，方便下一步进行剪枝操作，注意，升序之后才能剪枝
  candidates = candidates.sort((a, b) => a - b)
  backTracking([], 0, 0)

  return result
};
// @lc code=end

