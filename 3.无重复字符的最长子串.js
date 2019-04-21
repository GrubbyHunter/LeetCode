/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (29.10%)
 * Total Accepted:    111K
 * Total Submissions: 381.4K
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 示例 1:
 *
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   if (s && s.length <= 1) {
//     return 1
//   }
//   let length = s.length,
//     i = 0
//   let max = 0
//   debugger
//   while (i < length) {
//     let j = i
//     let temp = 0
//     let map = new Map()

//     while (j < length) {
//       if (!map.get(s[j])) {
//         map.set(s[j], s[j])
//         j++
//         temp++
//       } else {
//         break
//       }
//     }
//     max = max > temp ? max : temp
//     i++
//   }

//   return max
// }
var lengthOfLongestSubstring = function(s) {
  if (s && s.length <= 1) {
    return 1
  }
  let length = s.length,
    i = 1
  let max = 0
  let map = new Map()
  let preIndex = 0
  let size = 0
  map.set(s[preIndex], 1)

  while (i < length) {
    if (map.has(s[i])) {
      preIndex = Math.max(map.get(s[i]), preIndex)
    }

    map.set(s[i], i + 1)
    size = i - preIndex + 1
    max = Math.max(size, max)

    i++
  }

  return max
}
