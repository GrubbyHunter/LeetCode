/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  let j = 0;
  let count = 0;

  // 双指针法
  for (let i = 0; i < s.length; i++) {
    for (; j < t.length; j++) {
      // 相等的话j++，同时跳出内层循环，比较下个数
      if (s[i] === t[j]) {
        count++;
        j++;
        break;
      }
    }
  }

  return count === s.length;
}
// @lc code=end
