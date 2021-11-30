/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function combinationSum3(k: number, n: number): number[][] {
  let result: any = []

  const backTracking = (arr: number[], start: number, currentSum: number) => {
    if (currentSum === n && arr.length === k) {
      result.push([...arr])
      return
    }

    for (let i = start; i <= 9 && i <= n - currentSum; i++) {
      currentSum += i
      arr.push(i)

      backTracking(arr, i + 1, currentSum)
      // 回溯操作
      arr.pop()
      currentSum -= i
    }
  }

  backTracking([], 1, 0)
  return result
};
const arr = combinationSum3(3, 7)

// @lc code=end

