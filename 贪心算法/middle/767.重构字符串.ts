/*
 * @lc app=leetcode.cn id=767 lang=typescript
 *
 * [767] 重构字符串
 */

// @lc code=start
function reorganizeString(s: string): string {
  let result = new Array(s.length)
  let map = new Map()
  // 贪心：优先处理出现最大次数的字母
  let maxCount = 0
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else {
      map.set(s[i], 1)
    }

    // 统计最大次数
    maxCount = Math.max(maxCount, map.get(s[i]))
  }

  // 最大的出现次数超过字符串总长度一半了，那就说明无法做到全部间隔开
  // 返回空字符串
  if (maxCount * 2 - 1 > s.length) {
    return ""
  }

  const arrayObj = Array.from(map);
  // 对map进行降序排序，优先处理出现次数最多的字母
  arrayObj.sort(function (a, b) { return b[1] - a[1] })

  let index = 0 // 起始下标，从0开始先填充奇数位
  for (let i = 0; i < arrayObj.length; i++) {
    // 消耗完出现字母次数
    while (arrayObj[i][1]--) {
      result[index] = arrayObj[i][0]
      // 每次下标+2，这样就能实现错开间隔
      index += 2

      // 超出下标之后，重置为偶数下标，继续填充偶数位
      if (index >= s.length) {
        // 这里由于maxCount不到s.length的一半
        // 所以index=1时候肯定已经是后面的元素填充进来了，不会出现重复
        index = 1
      }
    }
  }

  return result.join("")
};
// @lc code=end

