/*
 * @lc app=leetcode.cn id=424 lang=typescript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
function characterReplacement(s: string, k: number): number {
  let result = 0
  // 滑动窗口解法
  let maxCnt = 0
  // 数组下标记录字母ascii code 位置，数组值记录字母出现次数
  let countArr = new Array(26).fill(0)
  let left = 0, right = 0
  // 这里有点贪心算法的思维，left到right之间出现最多的字母出现了maxCnt次
  // 我们尽可能利用k来翻转left到right之间的其他字母，这样尽可能的让k充分利用
  // 例如：“AABAB”,k=2,这时候最多的是A，出现了3次，我们肯定是去翻转B，来让A达到更多
  for (; right < s.length; right++) {
    // 这里字母都是大写，所以减去 65 而不是97
    // 当前字母的数量 + 1
    countArr[s[right].charCodeAt(0) - 65]++
    // 获取left - right 区间出现字母最多的次数maxCnt
    maxCnt = Math.max(maxCnt, countArr[s[right].charCodeAt(0) - 65])

    // 当前滑动窗口区间为[left,right]，里面有right - left + 1 个元素
    // 如果出现最多的元素maxCnt 加上翻转次数k，小于这个区间元素个数
    // 那么需要左边窗口缩小，left++
    // 实际上只要right - left + 1 等于 maxCnt + k，那么条件成立
    // 当前区间元素个数 = 最多的元素个数maxCnt + k 需要翻转的元素个数
    while (right - left + 1 > maxCnt + k) {
      // left移动时，将当期按移除元素的数量 - 1
      countArr[s[left].charCodeAt(0) - 65]--
      left++
    }
    // 统计最大值，这里left移动时候maxCnt不需要-1
    // 因为区间大小跟maxCnt + k相等时，result的值才成立
    // 如果区间缩小了（left++），这时候计算出来的result肯定会小于之前的区间最大值
    // result的值会被下面这个max覆盖
    result = Math.max(right - left + 1, result)
  }

  return result
};
// @lc code=end

