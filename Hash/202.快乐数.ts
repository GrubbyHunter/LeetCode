/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  // sum是下一次拆分进行平方的原始数据
  // 所以这里使用Object记录sum是否出现过，出现贵的话就会陷入死循环，一定不是快乐树
  let result = {}
  let sum = 0

  // 存在且不止出现过一次，死循环了，肯定不是快乐数，return false
  while (!result[n] || result[n] === 1) {
    // 求和开始
    while (n > 9) {
      let temp = n % 10
      n = Math.floor(n / 10)
      sum += Math.pow(temp, 2)
    }
    sum += Math.pow(n, 2)
    // 等于1，退出循环
    if (sum === 1) {
      return true
    }

    // 已经出现过一次，变成第二次
    if (result[sum] === 1) {
      result[sum] = 2
    } else {
      // 没有出现过，记录第一次
      result[sum] = 1
    }

    n = sum
    sum = 0
  }

  return false
};
// @lc code=end

