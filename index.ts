/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function isHappy(n: number): boolean {
  // sum是下一次拆分进行平方的原始数据
  // 所以这里使用Object记录sum是否出现过，出现贵的话就会陷入死循环，一定不是快乐树
  let result: any = {}
  let sum = 0

  while (!result[n] || result[n] === 1) {
    while (n > 9) {
      let temp = n % 10
      n = Math.floor(n / 10)
      sum += Math.pow(temp, 2)
    }
    sum += Math.pow(n, 2)

    if (sum === 1) {
      return true
    }

    if (result[sum] === 1) {
      result[sum] = 2
    } else {
      result[sum] = 1
    }

    n = sum
    sum = 0
  }


  return false
};

isHappy(19);
// @lc code=end

