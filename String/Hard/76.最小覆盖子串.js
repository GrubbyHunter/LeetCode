/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let length = t.length
  let targetObj = {}
  let minLength = s.length,
    left = 0
  let currentLength = 0
  let result = ""

  if (t.length > s.length) {
    return ""
  }

  if (t == s) {
    return t
  }

  // 将每个字母出现的次数存入hashMap
  for (var i = 0; i < length; i++) {
    let count = targetObj[t[i]]

    targetObj[t[i]] = !count ? 1 : count + 1
  }

  for (let i = 0, j = s.length; i < j; i++) {
    let count = targetObj[s[i]]

    // 如果是目标字符串中的字母，name需要长度坚毅
    if (typeof count == "number") {
      //是目标字母
      targetObj[s[i]] = count - 1
      if (count > 0) {
        currentLength++
      }
    }

    while (length == currentLength) {
      if (minLength >= i - left + 1) {
        minLength = i - left + 1
        result = s.substr(left, minLength)
      }

      let count = targetObj[s[left]]

      // 如果是目标字符串中的字母，name需要长度坚毅
      if (typeof count == "number") {
        if (count == 0) {
          currentLength--
        }

        targetObj[s[left]] = count + 1
      }

      left++
    }
  }

  return result
}
