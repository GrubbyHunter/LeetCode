/*
 * @lc app=leetcode.cn id=332 lang=typescript
 *
 * [332] 重新安排行程
 */

// @lc code=start
function findItinerary(tickets: string[][]): string[] {
  const result: any = []
  const map: any = {}
  // 数组转对象
  // [[a,b],[a,c],[b,c]] => {a:[b,c],b:[c]}
  for (let city of tickets) {
    if (!map[city[0]]) {
      map[city[0]] = []
    }
    map[city[0]].push(city[1])
  }

  // 对象的value进行排序，保证字母ascii小的靠前
  for (let key in map) {
    map[key].sort()
  }

  // 这里的回溯增加返回值，true的话表示上次传进来的endCity作为此次的startCity
  // 满足条件，不需要回溯操作，而false则表明不满足行程要求，需要回溯
  const backTracking = (size: number, startCity: string): boolean => {
    // 如果行程次数达到数组总数，说明达到结尾，直接返回true
    if (size === tickets.length) {
      return true
    }
    const endCityList = map[startCity]
    // 这里上一次的结尾城市作为本次的开始城市在map中找不到下一次行程
    // 则不满足要求
    if (!endCityList || endCityList.length === 0) {
      return false
    }

    for (let i = 0; i < endCityList.length; i++) {
      const endCity = endCityList[i]

      // 删除已走过城市，防止死循环
      endCityList.splice(i, 1)
      size++
      // 结尾城市增加到数组
      result.push(endCity)
      // endCity在下一次中满足条件，则本次不需要回溯操作
      if (backTracking(size, endCity)) {
        return true
      }
      // 回溯
      result.pop()
      size--
      // 已有航线走不通，回溯当前target 城市
      endCityList.splice(i, 0, endCity)
    }
    // 这里return false 可不写，因为上面length === 0 已经处理了，防止TS校验报错，还是写一下
    return false
  }

  // result先记录起点城市，回溯中就只用处理终点城市的逻辑即可
  result.push("JFK")
  backTracking(0, "JFK")

  return result
};
// @lc code=end

