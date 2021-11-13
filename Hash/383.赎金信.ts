/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  let result = {}

  for (let letter of ransomNote) {
    if (result[letter]) {
      result[letter] += 1
    } else {
      result[letter] = 1
    }
  }

  for (let letter of magazine) {
    if (result[letter]) {
      result[letter] -= 1
    }
  }

  for (let key in result) {
    if (result[key] > 0) {
      return false
    }
  }

  return true
};
// @lc code=end

