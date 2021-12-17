/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function lemonadeChange(bills: number[]): boolean {
  let priceMap: any = { 5: 0, 10: 0 }

  for (let i = 0; i < bills.length; i++) {

    switch (bills[i]) {
      case 5:
        priceMap[5] = priceMap[5] + 1
        break
      case 10:
        if (priceMap[5] === 0) {
          return false
        }
        priceMap[5] = priceMap[5] - 1
        priceMap[10] = priceMap[10] + 1
        break
      case 20:
        if (priceMap[10] <= 0) {
          if (priceMap[5] < 3) {
            return false
          }
          priceMap[5] = priceMap[5] - 3
        } else {
          if (priceMap[5] < 1) {
            return false
          }
          priceMap[10] = priceMap[10] - 1
          priceMap[5] = priceMap[5] - 1
        }

        break
    }
  }

  return true
};
lemonadeChange([5, 5, 10, 10, 20])
// @lc code=end

