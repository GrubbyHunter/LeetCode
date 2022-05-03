/*
 * @lc app=leetcode.cn id=680 lang=typescript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
function validPalindrome(s: string): boolean {
  let left = 0, right = s.length - 1

  const isValid = (left: number, right: number): boolean => {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false
      }
      left++
      right--
    }

    return true
  }

  while (left < right) {
    if (s[left] === s[right]) {
      left++
      right--
    } else {
      // 如果不相等，只需要判断[left，right-1]和[left+1，right]，只要有一个是回文字符串即可
      return isValid(left, right - 1) || isValid(left + 1, right)
    }
  }

  return true
};
// @lc code=end

