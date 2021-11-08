/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  let result = {}
  if (!s || !t) {
    return false
  }

  if (s.length !== t.length) {
    return false
  }

  // 使用对象记录出现次数
  for (let i = 0; i < s.length; i++) {
    result[s[i]] = (result[s[i]] || 0) + 1
    result[t[i]] = (result[t[i]] || 0) - 1
  }

  // 对象中有不为0的，说明这个字母在两个字符串中出现次数不一样
  for (let key in result) {
    if (result[key] !== 0) {
      return false
    }
  }

  return true
};
// @lc code=end

