// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  let map = new Map()
  let valueMap = new Map()
  let result: any = []
  let sum = 1.0
  let hadFind: any = []
  const findResult = (start: string, nextList: string[], end: string): number => {
    if (hadFind.indexOf(start) > -1) {
      return -1
    }

    if (!nextList) {
      return -1
    }
    // 一招过的元素追加进数组，避免死循环
    hadFind.push(start)

    if (nextList.indexOf(end) > -1) {
      sum *= valueMap.get(`${start}${end}`)
      return sum
    }

    for (let i = 0; i < nextList.length; i++) {
      if (!map.get(nextList[i])) {
        continue
      }

      sum *= valueMap.get(`${start}${nextList[i]}`)
      let next = findResult(nextList[i], map.get(nextList[i]), end)
      if (next !== -1) {
        return next
      }

      sum /= valueMap.get(`${start}${nextList[i]}`)
    }
    return -1
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
    valueMap.set(`${current[0]}${current[1]}`, values[i])
  }

  for (let i = 0; i < queries.length; i++) {
    let cur = queries[i]
    if (cur[0] === cur[1]) {
      result.push(1.0)
      continue
    }

    if (valueMap.get(`${cur[0]}${cur[1]}`)) {
      result.push(valueMap.get(`${cur[0]}${cur[1]}`))
      continue
    }

    if (valueMap.get(`${cur[1]}${cur[0]}`)) {
      result.push(1 / valueMap.get(`${cur[1]}${cur[0]}`))
      continue
    }
    // 重置sum
    sum = 1.0
    // 重置统计的已遍历数组
    hadFind = []
    result.push(findResult(cur[0], map.get(cur[0]), cur[1]))
  }

  return result
};// @lc code=end
calcEquation([["a", "b"], ["b", "c"]]
  ,
  [2.0, 3.0]
  ,
  [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]])