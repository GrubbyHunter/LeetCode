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

    // 当前不足k个，全部反转
    if (i + k > s.length) {
      // 下标都需要 -1
      right = s.length - 1
    } else {
      // 只反转前k个
      right = i + k - 1
    }
    // 反转数组
    reverseString(stringArr, left, right)
  }

  return stringArr.join("")
};
// @lc code=end

