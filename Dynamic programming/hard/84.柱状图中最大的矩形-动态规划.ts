/*
* @lc app=leetcode.cn id=84 lang=typescript
*
* [84] 柱状图中最大的矩形
*/

// @lc code=start
function largestRectangleArea(heights: number[]): number {
  let size = heights.length
  // leftH[i]和right[i]的定义为当前i的高度，左边和右边第一个比他低的元素下标
  let leftIndex = new Array(size).fill(-1)
  let rightIndex = new Array(size).fill(size)
  let sum = 0

  for (let i = 1; i < size; i++) {
    let t = i - 1
    while (t >= 0 && heights[t] >= heights[i]) {
      // 这里当前t下标元素的高度大于等于heights[i]
      // 那么下次计算直接从leftIndex[t]开始，也就是第一个比heights[t]低的元素
      // 不需要一直t--，这样可以减少重复计算
      t = leftIndex[t]
    }
    // 找到左边比他小的高度元素的下标，如果是-1，则左边所有元素都比他大
    // 如果左边所有元素都比他大，那么此时t=-1
    leftIndex[i] = t
  }

  for (let i = size - 2; i >= 0; i--) {
    let t = i + 1
    while (t < size && heights[t] >= heights[i]) {
      t = rightIndex[t]
    }
    // 找到右边比他小的高度元素的下标，如果是-1，则右边所有元素都比他大
    // 如果有变速鱿鱼酥都比他大，那么t=size
    rightIndex[i] = t
  }

  for (let i = 0; i < size; i++) {
    // 因为左右比他矮的下标都不能计入宽度，所以要减去1
    // 比如size = 5，left=-1，right=5，那么还需要多减去一个1，宽度才是5
    let w = rightIndex[i] - leftIndex[i] - 1
    // 宽乘以高，为长方形面基，跟之前的面积比较，取较大值
    sum = Math.max(w * heights[i], sum)
  }

  return sum
};
// @lc code=end

