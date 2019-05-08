/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || strs.length == 0) {
    return ""
  }

  let length = strs.length
  let minStr = strs[0]

  // 遍历找到最短的字符串元素
  for (let i = 1; i < length; i++) {
    if (strs[i].length < minStr.length) {
      minStr = strs[i]
    }
  }

  let tempStr
  let index = 0

  for (let letter of minStr) {
    for (let i = 0; i < length; i++) {
      tempStr = strs[i]
      // 判断字符串第x个字母是否和最短字符串的第index个字母是否相等
      // 不相等则直接双重循环
      if (tempStr[index] != letter) {
        return minStr.substr(0, index)
      }
    }
    index++
  }

  return minStr.substr(0, index)
}
