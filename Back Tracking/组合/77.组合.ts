/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  let sum = []

  const backTracking = (start: number, result: number[]): void => {
    // 终止条件数组已经达到k个元素
    if (result.length === k) {
      // 由于数组是引用传递，这里需要构建一个新的数组来作为结果保存
      sum.push([...result])
      return
    }

    for (let i = start; i <= n; i++) {
      result.push(i)
      backTracking(++start, result)
      // 元素用完进行回溯移除
      result.pop()
    }
  }

  backTracking(1, [])
  return sum
};
// @lc code=end

