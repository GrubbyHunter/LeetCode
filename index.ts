// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function validPalindrome(s: string): boolean {
  let left = 0, right = s.length - 1
  let count = 0
  while (left < right) {
    if (count > 1) {
      return false
    }

    if (left + 1 === right) {
      return count > 1 ? false : true
    }

    if (s[left] === s[right]) {
      left++
      right--
      continue
    }

    if (s[left] === s[right - 1] && left < right - 1) {
      right--
      count++
      continue
    }

    if (s[left + 1] === s[right] && left + 1 < right) {
      left++
      count++
      continue
    }

    return false
  }

  if (count > 1) {
    return false
  }

  return true
};
validPalindrome("ebcbbececabbacecbbcbe")