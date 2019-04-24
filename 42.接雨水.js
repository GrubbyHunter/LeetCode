/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let size = 0
  let max = 0
  let key = 0
  for (var i = 1; i < height.length; i++) {
    if (max < height[i]) {
      max = height[i]
      key = i
    }
  }

  return sum
}
