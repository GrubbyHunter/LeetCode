// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function restoreIpAddresses(s: string): string[] {
  const result: string[] = []
  let sArr = s.split("")
  const length = sArr.length
  if (length === 0) {
    return result
  }

  const backTracking = (arr: string[], start: number) => {
    // 超过ip长度
    if (arr.length > length) {
      return
    }

    if (arr.length === 4 && start === sArr.length) {
      result.push(arr.join("."))
      return
    }

    for (let i = start; i < length; i++) {
      let str = sArr.slice(start, i + 1)

      if (str.length > 3) {
        break
      }

      let numberStr = str.join("")
      if (str.length === 3) {
        if (parseInt(numberStr, 10) > 255) {
          break
        }
      }
      arr.push(numberStr)
      backTracking(arr, i + 1)
      arr.pop()
    }
  }

  backTracking([], 0)
  return result
};
restoreIpAddresses("25525511135")