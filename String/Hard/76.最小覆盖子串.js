/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */
/**
 * @desc 这个题采用左右动态窗口的解法
 * 1、首用一个对象result或者Map记录目标字符串中每个字母出现的次数
 * 2、使用左右两个指针限定窗体的大小，左边的left从0开始，右边的指针为当前便利的下标i
 * 3、首先扩大窗体，i为右边向右遍历，进行扩张，遍历过程中如果有碰到目标字母，将result对应的记录属性-1，一直减到0为止
 * 4、result中所有的属性减到了0，则表示目前的窗体中能完全匹配上目标字符串，这时候需要从左边开始移动减小窗体，过滤掉左边那头多余的字母
 * 5、只要其中一个字母的count==0，这时候去掉了这个字母，则窗体中已经不满足条件，所以停止左边收缩，右边继续扩张
 * 6、每次满足条件时候比对之前记录的最小长度和当前最小长度，最后得出最小长度
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
