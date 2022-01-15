/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function isSubsequence(s: string, t: string): boolean {
  let j = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    for (; j < t.length; j++) {
      if (s[i] === t[j]) {
        count++;
        j++;
        break;
      }
    }
  }

  return count === s.length;
}
isSubsequence("aaaaaa", "bbaaaa");
// @lc code=end
