/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
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

  const backTracking = (size: number, startCity: string): boolean => {
    if (size === tickets.length) {
      return true
    }
    const endCityList = map[startCity]

    if (!endCityList || endCityList.length === 0) {
      return false
    }

    for (let i = 0; i < endCityList.length; i++) {
      const endCity = endCityList[i]

      // 删除已走过航线，防止死循环
      endCityList.splice(i, 1)
      size++
      result.push(endCity)
      if (backTracking(size, endCity)) {
        return true
      }
      result.pop()
      size--
      // 已有航线走不通，回溯当前target 城市
      endCityList.splice(i, 0, endCity)
    }
    return false
  }
  result.push("JFK")
  backTracking(0, "JFK")

  return result
};

findItinerary([["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]])

// @lc code=end

