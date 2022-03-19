/*
 * @lc app=leetcode.cn id=43 lang=typescript
 *
 * [43] 字符串相乘
 */

// @lc code=start
function multiply(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") {
    return "0"
  }
  let m = num1.length
  let n = num2.length
  // 由于直接相乘例如"123456789"*"987654321"会出现超过Number.MAX_SAFT_INTEGER的情况
  // 所以这里使用数组记录每一位的乘积进行累加
  let result: number[] = new Array(num1.length + num2.length).fill(0)

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      // 分别将每一位单个数字进行相乘
      let first: number = parseInt(num1.charAt(i))
      let second: number = parseInt(num2.charAt(j))
      // 当前相乘的结果需要加上数组中上一位记录的结果
      // 例如 65 * 23
      // 5*3 = 15 result = [0,0,1,5]
      // 下一次 6*3 = 18,18的8需要加上15的1， result = [0,1,9,5]
      // 可以理解为 65*3 = 195
      let currentResult = first * second + result[i + j + 1]

      // 保存当前后一位的结果，例如上面的15，将5存入result[3]
      result[i + j + 1] = currentResult % 10
      // 保存并累加前一位的结果，例如123*456
      // 18+120+600，这里600的6要与120的1相加
      result[i + j] += Math.floor(currentResult / 10)
    }
  }

  let i = 0
  // 去除左边为0的情况，找到第一个不为0的数
  while (result[i] === 0) {
    i++
  }
  result = result.slice(i)

  // 转化为字符串
  return result.join("")
};
// @lc code=end

