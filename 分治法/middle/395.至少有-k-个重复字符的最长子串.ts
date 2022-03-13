/*
 * @lc app=leetcode.cn id=395 lang=typescript
 *
 * [395] 至少有 K 个重复字符的最长子串
 */

// @lc code=start
function longestSubstring(s: string, k: number): number {
  let max = 0

  if (k === 1) {
    return s.length
  }

  // left: 左边区间下标 right：右边区间下标
  const findMaxLength = (left: number, right: number) => {
    const map: any = new Map()
    // 数组越界，或者区间不足k个元素，返回
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
    // 统计出现小于k的字母，并保存他们的下标
    for (let [key, list] of map) {
      if (list.length < k) {
        indexList = indexList.concat(list)
      }
    }

    // 如果不存在出现小于k次的字母
    // 则此区间满足条件，进行长度统计
    if (indexList.length === 0) {
      max = Math.max(max, right - left + 1)
      return
    }

    // 数组排序
    indexList.sort((a: number, b: number) => a - b)

    let start: number = left
    // 从最左边开始，用下标拆分字符串，例如b的下标是5，b出现了2次，但是k等于3
    // 则b肯定不在满足条件范围的区间，用b将数组查分，继续比较
    for (let i = 0; i < indexList.length; i++) {
      // start到当前indexList[i]区间不足k个元素，也不满足条件
      // 不继续查找
      if (indexList[i] - start + 1 >= k) {
        // 拆分完，继续查找下一个子区间
        findMaxLength(start, indexList[i] - 1)
      }

      // 区见左边下标变为当前右边下标+1
      start = indexList[i] + 1
    }

    // 最后一个分割点(start)到数组结尾(right)依然超过k个元素，则start-right区间也需要继续统计
    if (right - start + 1 >= k) {
      findMaxLength(start, right)
    }
  }

  findMaxLength(0, s.length - 1)

  return max
};
// @lc code=end

