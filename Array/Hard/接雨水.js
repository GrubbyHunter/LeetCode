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
  let max = 0
  let key = 0

  for (var i = 0; i < height.length; i++) {
    if (max < height[i]) {
      max = height[i]
      key = i
    }
  }

  let left = 0
  let right = height.length - 1
  let sum = 0

  for (let i = 0; i < key; i++) {
    if (height[left] > height[i]) {
      sum = sum + height[left] - height[i]
    }

    if (height[left] < height[i]) {
      left = i
    }
  }

  for (let i = right; i > key; i--) {
    if (height[right] > height[i]) {
      sum = sum + height[right] - height[i]
    }

    if (height[right] < height[i]) {
      right = i
    }
  }

  return sum
}
