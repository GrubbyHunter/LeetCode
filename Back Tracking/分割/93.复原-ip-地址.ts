/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */

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

    // 长度满足ip个数，且已经分割到了尾部
    if (arr.length === 4 && start === length) {
      // 拼接数组元素，组成ip字符串
      result.push(arr.join("."))
      return
    }

    for (let i = start; i < length; i++) {
      let str = sArr.slice(start, i + 1)
      // 超过999
      // 因为条件已经不满足，当前层的遍历继续已经无意义
      // 所以直接使用break
      if (str.length > 3) {
        break
      }

      let numberStr = str.join("")
      if (str.length === 3) {
        // 超过256
        if (parseInt(numberStr, 10) > 255) {
          break
        }
      }

      // 大于1，但是以0位开头
      if (str.length > 1 && str[0] === "0") break

      arr.push(numberStr)
      backTracking(arr, i + 1)
      arr.pop()
    }
  }

  backTracking([], 0)
  return result
};
// @lc code=end

