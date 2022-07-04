/*
 * @lc app=leetcode.cn id=541 lang=typescript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
function reverseString(s: string[], left, right): void {
  while (left < right) {
    let temp = s[left]
    s[left] = s[right]
    s[right] = temp
    left++
    right--
  }
};

function reverseStr(s: string, k: number): string {
  let stringArr = s.split("")
  // 每次走2k
  for (let i = 0; i < s.length; i += 2 * k) {
    let left = i
    let right = 0

    // 剩余个数超过k个，依然翻转前k个
    if (s.length - i > k) {
      right = i + k - 1
    } else {
      // 不足k个，翻转全部
      right = s.length - 1
    }
    // 反转数组
    reverseString(stringArr, left, right)
  }

  return stringArr.join("")
};
// @lc code=end

