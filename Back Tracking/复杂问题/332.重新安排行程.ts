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

      // 删除结束城市的第i个元素，最为新的起始元素
      endCityList.splice(i, 1)
      // 记录行程
      result.push(endCity)
      // 继续递归能够找到最终的结果，返回true
      if (backTracking(size + 1, endCity)) {
        return true
      }
      // 回溯行程
      result.pop()
      // 找不到结果需要进行回溯，将删除的元素回溯追加回数组endCityList
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

