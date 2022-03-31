/*
 * @lc app=leetcode.cn id=2024 lang=typescript
 *
 * [2024] 考试的最大困扰度
 */

// @lc code=start
function maxConsecutiveAnswers(answerKey: string, k: number): number {
  let getMax = (letter: string): number => {
    let max = 0
    let count = 0

    for (let left = 0, right = 0; right < answerKey.length; right++) {
      // 滑动窗口右边先走
      if (answerKey[right] === letter) {
        count++
      }
      // 当count === k，跳过左边，直接获取长度
      // 当count > k.走左边，让区间中的T数量恢复到k个
      while (count > k) {
        if (answerKey[left] === letter) {
          count--
        }
        // 这里count--之后，左边再left++
        // 因为区间实际上有k+1个T,left++后，区间又变成了k个T
        // 同时，left也回到正确的位置(T后面第一个位置)
        left++
      }

      max = Math.max(max, right - left + 1)
    }
    return max
  }

  return Math.max(getMax('T'), getMax('F'))
};
// @lc code=end

