/*
 * @lc app=leetcode.cn id=399 lang=typescript
 *
 * [399] 除法求值
 */

// @lc code=start
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  let map = new Map()
  let valueMap: any = {}
  let result: any = []
  let sum = 1.0
  let hadFind: any = []

  const findResult = (start: string, nextList: string[], end: string): number => {
    // 已经找过头部，返回-1，避免死循环
    if (hadFind.indexOf(start) > -1.0) {
      return -1.0
    }

    // 下一个要找的尾部为空
    if (!nextList) {
      return -1.0
    }

    // 已找过的元素追加进数组，避免死循环
    hadFind.push(start)

    // 需要继续往下找，如果已经到结尾，乘以当前的值，然后返回
    if (nextList.indexOf(end) > -1.0) {
      sum *= valueMap[`${start}${end}`]
      return sum
    }

    // 遍历下一个元素的列表
    for (let i = 0; i < nextList.length; i++) {
      // 当前元素没有下一个元素列表，直接返回
      if (!map.get(nextList[i])) {
        continue
      }

      // 还没找到结尾，乘以当前的值，继续往下找
      sum *= valueMap[`${start}${nextList[i]}`]
      // 当前列表值作为start，他的下一个值列表作为list继续递归寻找
      let next = findResult(nextList[i], map.get(nextList[i]), end)
      // 找到结尾，进行返回
      if (next !== -1.0) {
        return next
      }
      // 没找打结尾，将上一个乘的值回溯
      sum /= valueMap[`${start}${nextList[i]}`]
    }
    // 遍历完没找到，返回-1
    return -1.0
  }

  for (let i = 0; i < equations.length; i++) {
    let current = equations[i]

    // 记录下一个元素
    if (!map.get(current[0])) {
      map.set(current[0], [current[1]])
    } else {
      map.get(current[0]).push(current[1])
    }

    // 记录值
    valueMap[`${current[0]}${current[1]}`] = values[i]
  }

  // 遍历每一个求值对，如果在valueMap中存在，直接赋值
  // 如果不存在，将他的头部作为key在map中寻找下一个元素的列表，直到找到结尾
  // a/c = a/b* b/d* d/c
  // ac = 这三个对的值相乘即可，递归找到这三个对
  for (let i = 0; i < queries.length; i++) {
    let cur = queries[i]
    if (cur[0] === cur[1]) {
      result.push(1.0)
      continue
    }

    // 直接在map中找到相等的两个元素，直接赋值
    if (valueMap[`${cur[0]}${cur[1]}`]) {
      result.push(valueMap[`${cur[0]}${cur[1]}`])
      continue
    }
    // 直接在map中找到相等的两个元素，位置相反，直接1/赋值
    if (valueMap[`${cur[1]}${cur[0]}`]) {
      result.push(1.0 / valueMap[`${cur[1]}${cur[0]}`])
      continue
    }
    // 递归寻找之前需要
    // 重置sum
    sum = 1.0
    // 重置统计的已遍历数组
    hadFind = []

    result.push(parseInt(findResult(cur[0], map.get(cur[0]), cur[1]).toFixed(1)))
  }

  return result
}
// @lc code=end

