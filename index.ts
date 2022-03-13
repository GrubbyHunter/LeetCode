// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function longestSubstring(s: string, k: number): number {
  let max = 0

  if (k === 1) {
    return s.length
  }

  const findMaxLength = (left: number, right: number) => {
    const map: any = new Map()
    if (left >= right || right - left + 1 < k) {
      return
    }

    // 统计每个字母出现的次数
    for (let i = left; i <= right; i++) {
      let list: any = map.get(s[i])

      if (!list) {
        map.set(s[i], [i])
      } else {
        map.get(s[i]).push(i)
      }
    }

    let indexList: any = []
    for (let [key, list] of map) {
      if (list.length < k) {
        indexList = indexList.concat(list)
      }
    }

    if (indexList.length === 0) {
      max = Math.max(max, right - left + 1)
      return
    }

    indexList.sort((a: number, b: number) => a - b)

    let start: number = left
    for (let i = 0; i < indexList.length; i++) {
      if (indexList[i] - start + 1 >= k) {
        findMaxLength(start, indexList[i] - 1)
      }

      start = indexList[i] + 1
    }

    if (right - start + 1 >= k) {
      findMaxLength(start, right)
    }
  }

  findMaxLength(0, s.length - 1)

  return max
};
longestSubstring("bbaaacbd", 3)