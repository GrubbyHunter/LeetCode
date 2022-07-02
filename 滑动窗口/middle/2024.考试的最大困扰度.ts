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
        // 统计letter的数量
        count++
      }

      // letter次数超过翻转次数k，需要减少letter的次数
      while (count > k) {
        // 移动左指针
        if (answerKey[left] === letter) {
          // letter的数量减少
          count--
        }
        left++
      }

      // 到这里count的数量 <= k ,nameleft 到right的区间内
      // letter的数量 足够使用K翻转，区间长度满足条件
      max = Math.max(max, right - left + 1)
    }
    return max
  }

  return Math.max(getMax('T'), getMax('F'))
};
// @lc code=end

