/*
 * @lc app=leetcode.cn id=763 lang=typescript
 *
 * [763] 划分字母区间
 */

// @lc code=start
function partitionLabels(s: string): number[] {
  let str = s.split("")
  let result: any = []
  let map: any = {}

  // 使用map记录每个字符出现的最后一个下标
  for (let i = 0; i < str.length; i++) {
    map[str[i]] = i
  }

  let left = 0
  let right = 0

  for (let i = 0; i < str.length; i++) {
    // left到i这个范围内出现的字符最远边界
    // right为之前的最远变边界，map中记录当前i的最远边界
    // 不用担心范围内有更远的边界，有的话会用max取值拓宽边界
    right = Math.max(right, map[str[i]])

    // 最远边界跟当前下标相等，则为分割点
    if (i === right) {
      result.push(right - left + 1)
      left = i + 1
    }
  }

  return result
};
// @lc code=end

