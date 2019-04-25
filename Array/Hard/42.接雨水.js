/*
 * @lc app=leetcode.cn id=42 lang=javascript
 * 这题的思路就是找到数组中的最大值，也就是最高的墙，
 * 找到之后将数组一分为二，左边往最高墙进行遍历
 * 如果左边比当前值大，那么左边的值减去当前值为雨水的贮存量，然后进行累加
 * 如果左边比当前值小，那么当前值为新的左边值(即左边的墙)
 * 右边同理，然后统计两边的和
 * [42] 接雨水
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let max = 0
  let key = 0

  // 先计算出最大值，因为如果没有最高点(最大值)，没法贮存雨水
  for (var i = 0; i < height.length; i++) {
    if (max < height[i]) {
      max = height[i]
      key = i
    }
  }

  let left = 0
  let right = height.length - 1
  let sum = 0

  // 使用最大值将数组一分为二，左边从0往最大值进行遍历
  for (let i = 0; i < key; i++) {
    // 如果左边的墙的值比当前值要大，则两个的差为雨水存量
    if (height[left] > height[i]) {
      sum = sum + height[left] - height[i]
    }
    // 如果当前值比左边的墙的值要大，则当前值为新的墙
    if (height[left] < height[i]) {
      left = i
    }
  }

  // 右边如同上面一样计算
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
