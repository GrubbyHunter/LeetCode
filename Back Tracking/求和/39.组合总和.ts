/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = []

  const backTracking = (arr: number[], sum: number, start: number) => {
    if (sum === target) {
      result.push([...arr])
      return
    }

    // 排序后才有使用此处的剪枝操作，越往后数字越大，所以不需要继续加了
    if (sum > target) {
      return
    }

    for (let i = start; i < candidates.length; i++) {
      arr.push(candidates[i])
      // 元素可以重复，所以此处是i而不是i+1
      backTracking(arr, sum + candidates[i], i)
      arr.pop()
    }
  }
  // 对数组升序排列，方便下一步进行剪枝操作，注意，升序之后才能剪枝
  candidates = candidates.sort((a, b) => a - b)
  backTracking([], 0, 0)

  return result
};
// @lc code=end

