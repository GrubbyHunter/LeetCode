// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function characterReplacement(s: string, k: number): number {
  let result = 0
  // 滑动窗口解法
  let maxCnt = 0
  // 数组下标记录字母ascii code 位置，数组值记录字母出现次数
  let countArr = new Array(26).fill(0)
  let left = 0, right = 0

  for (; right < s.length; right++) {
    // 由于是大写字母，所以生成下标这里是-65，不是-97
    countArr[s.charCodeAt(right) - 65]++ // 计算出现次数
    // 当前left到right直接出现次数最大的字母
    maxCnt = Math.max(maxCnt, countArr[s.charCodeAt(right) - 65])

    // 这里有点贪心算法的思维，left到right之间出现最多的字母出现了maxCnt次
    // 我们尽可能利用k来翻转left到right之间的其他字母，这样尽可能的让k充分利用
    // 例如：“AABAB”,k=2,这时候最多的是A，出现了3次，我们肯定是去翻转B，来让A达到更多

    // k + 最多次数的字母，不足区间长度，说明k次不足已替换剩下的字母
    while (right - left + 1 > k + maxCnt) {

      // 移动完左边区间里移出元素的个数需要-1
      countArr[s.charCodeAt(left) - 65]--
      // 滑动窗口过大，需要移动左边
      left++

    }

    // 满足条件
    // k + 最多次数的字母，大于等于区间长度，说明k次足以替换剩下的字母
    result = Math.max(right - left + 1, result)
  }

  return result
};
characterReplacement("AAAABBCCCCC", 2)