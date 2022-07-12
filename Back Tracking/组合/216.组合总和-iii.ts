/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 */

// @lc code=start
function combinationSum3(k: number, n: number): number[][] {
  let result: any = []

  const backTracking = (arr: number[], start: number, currentSum: number) => {
    if (currentSum === n && arr.length === k) {
      result.push([...arr])
      return
    }

    // 剪枝操作：
    // 1、如果当前和+下一个需要计算的 > 总和
    // 2、当前数量已经大于等于k
    if (arr.length >= k) {
      return
    }

    if (currentSum >= n) {
      return
    }

    for (let i = start; i <= 9 - (k - arr.length) + 1; i++) {
      arr.push(i)
      backTracking(arr, i + 1, currentSum + i)
      arr.pop()
    }
  }

  backTracking([], 1, 0)
  return result
};
// @lc code=end

