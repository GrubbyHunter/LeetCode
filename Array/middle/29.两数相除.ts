/*
 * @lc app=leetcode.cn id=29 lang=typescript
 *
 * [29] 两数相除
 */

// @lc code=start
// @lc code=start
function divide(dividend: number, divisor: number): number {
  // 先把两数都当成正数来处理
  let first = Math.abs(dividend)
  let second = Math.abs(divisor)
  let result = 0
  let sum = second
  let count = 1

  if (first === second) {
    return dividend === divisor ? 1 : -1
  }

  // 越界情况
  if (dividend === -2147483648 && divisor === -1) {
    return 2147483647;
  }

  // 将除法换成减法来计算，实际上是累积之前减的结果和次数统计
  // 比如20 /3 直接遍历要计算6次
  // 这里第一次 20 - 3 => result = 1
  // 第二次 17 -(3+3) => result = result + 2 = 3
  // 第三次 11 -(3+3+3) => result = result + 3 = 6
  // 这时候 first - sum < second && first - sum >= 0 跳出循环
  // 6次遍历优化为3次
  while (first > second) {
    // 当前sum为count个second的和
    // 如果减去sum依然大于second
    if (first - sum > second) {
      // 说明first有超过 count个second，result 累加count
      result += count
      // first 减去sum继续计算
      first = first - sum

      // sum继续累加second
      sum += second
      // 累加次数
      count++
    } else if (first - sum === second) {
      // first 中有count + 1个second，直接跳出循环
      result += count + 1
      break
    } else {
      // first - sum < second
      // first-sum >= 0,first中至少有count个second
      if (first - sum >= 0) {
        result += count
        // 跳出循环
        break
      } else {
        // first-sum < 0
        // 不足count个second
        // sum变小，继续比较
        sum -= second
        // count也要变小
        count--
      }

    }
  }


  // 两数一整一负，那么需要在结果前面加负号
  if (dividend > 0 && divisor < 0) {
    return -result
  }
  if (dividend < 0 && divisor > 0) {
    return -result
  }
  return result
};
// @lc code=end

