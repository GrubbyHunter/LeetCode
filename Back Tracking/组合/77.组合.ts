/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  let sum: number[][] = []

  const backTracking = (index: number, arr: number[]) => {
    if (arr.length === k) {
      // 注意这里需要使用解构重新生成一个数组
      // 避免引用修改之后影响到已经push到sum的结构
      sum.push([...arr])
      return
    }
    // i <= n的剪枝操作，k - arr.length为剩余个数
    // 如果i到n剩余不足k - arr.length个，则不需要遍历
    for (let i = index; i <= n - (k - arr.length) + 1; i++) {
      arr.push(i)
      backTracking(i + 1, arr)
      // 回溯
      arr.pop()
    }
  }

  backTracking(1, [])
  return sum
};
// @lc code=end

