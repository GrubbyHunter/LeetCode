/*
 * @lc app=leetcode.cn id=860 lang=typescript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
function lemonadeChange(bills: number[]): boolean {
  let priceMap: any = { 5: 0, 10: 0 }

  for (let i = 0; i < bills.length; i++) {

    switch (bills[i]) {
      case 5:
        // 收到5块不用找零
        priceMap[5] = priceMap[5] + 1
        break
      case 10:
        // 收到10块，没有5块找零，则找不开
        if (priceMap[5] === 0) {
          return false
        }
        priceMap[5] = priceMap[5] - 1
        priceMap[10] = priceMap[10] + 1
        break
      case 20:
        // 收到20，没有10块，且5块小于3张，找不开
        if (priceMap[10] <= 0) {
          if (priceMap[5] < 3) {
            return false
          }
          priceMap[5] = priceMap[5] - 3
        } else {
          // 收到20，有10块，5块小于1张，找不开
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
// @lc code=end

