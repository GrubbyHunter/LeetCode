/*
 * @lc app=leetcode.cn id=84 lang=typescript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
function largestRectangleArea(heights: number[]): number {
  // 升序单调栈，记录升序的下标
  let singleStack = []
  let result = 0
  // 数组头尾添加两个元素，例如只有一个元素时候方便计算左右下标
  heights = [0, ...heights, 0]


  for (let i = 0; i < heights.length; i++) {
    let size = singleStack.length
    // 当前元素大于栈顶元素，满足升序，下标推入栈
    if (heights[i] > heights[singleStack[size - 1]]) {
      singleStack.push(i)
    } else if (heights[i] === heights[singleStack[size - 1]]) {
      // 当前元素等于栈顶元素，推出栈顶元素下标，推入新的下标
      // 相当于更新宽度
      singleStack.pop()
      singleStack.push(i)
    } else {
      while (heights[i] < heights[singleStack[singleStack.length - 1]]) {
        // 当前index为中间元素
        let mid = singleStack.pop()
        // 中间元素出栈后栈顶元素为左侧元素
        let left = singleStack[singleStack.length - 1]
        let right = i
        // 当前i为右侧高度比i矮的第一个元素
        // 推出i后，栈顶元素为i的左边第一个比他矮的元素下标
        let w = right - left - 1

        result = Math.max(result, w * heights[mid])
      }
      singleStack.push(i)
    }
  }

  return result
};
// @lc code=end

