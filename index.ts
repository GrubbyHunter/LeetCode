/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function combine(n: number, k: number): number[][] {
  let sum: any = []

  const backTracking = (start: number, result: number[]): void => {
    // 终止条件数组已经达到k个元素
    if (result.length === k) {
      sum.push([...result])
      return
    }

    for (let i = start; i <= n; i++) {
      result.push(i)
      backTracking(++start, result)
      result.pop()
    }
  }

  backTracking(1, [])
  return sum
};
const arr = combine(4, 2)

// @lc code=end

