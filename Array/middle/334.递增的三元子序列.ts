/*
 * @lc app=leetcode.cn id=334 lang=typescript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
function increasingTriplet(nums: number[]): boolean {
  // min为递增序列第一个数
  let min = Number.MAX_SAFE_INTEGER
  // max为递增序列第2个数
  let max = Number.MAX_SAFE_INTEGER

  for (let num of nums) {
    // 先找到最小的数min
    if (num <= min) {
      // 这里当前值比max小，但是比min大，依然重置
      // 因为最后一个数只与第二个数比较
      // 例如 3 5 1 6
      // min = 3 max = 5
      // 下一次进来min变成了1，max还是5, 6比5大，直接确定了存在第三个数6
      // 实际上就是虽然min变成了1，但是可以确定5之前有一个比1大但是比5小的数
      // 形成 3 5 6
      min = num
    } else if (num <= max) {
      // 使用else if，找殴打第二小的数max

      max = num
    } else {
      // 找到比max大的数在，直接返回true
      return true
    }
  }

  return false
};
// @lc code=end

