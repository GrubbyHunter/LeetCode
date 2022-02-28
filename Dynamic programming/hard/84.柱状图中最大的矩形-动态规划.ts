/*
* @lc app=leetcode.cn id=84 lang=typescript
*
* [84] 柱状图中最大的矩形
*/

// @lc code=start
function maximalRectangle(matrix: string[][]): number {
  // 寻找柱状图中最大的矩阵面积，参考leetcode 84题
  // https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
  const findMaxMatrix = (arr: number[]): number => {
    let max = 0
    // 记录当前节点左边第一个比它矮的节点下标，如果没有使用默认的-1
    let leftArr = new Array(arr.length).fill(-1)
    // 记录当前节点右边第一个比它矮的节点下标，如果没有使用默认的length
    let rightArr = new Array(arr.length).fill(arr.length)

    // 从i开始遍历，因为leftArr[0]左边没有元素，一定是-1
    for (let i = 1; i < arr.length; i++) {
      let t = i - 1
      while (t >= 0 && arr[t] >= arr[i]) {
        // i-1下标的元素大于i下标的元素
        // 那么找到第一个比arr[t]小的元素的下标leftArr[t]，继续与arr[i]比较
        t = leftArr[t]
      }
      leftArr[i] = t
    }

    // 从倒数第二个元素开始遍历，因为leftArr[length-1]右边没有元素，一定是length
    for (let i = arr.length - 2; i >= 0; i--) {
      let t = i + 1
      while (t < arr.length && arr[t] >= arr[i]) {
        // i-+1下标的元素大于i下标的元素
        // 那么找到第一个比arr[t]小的元素的下标rightArr[t]，继续与arr[i]比较
        t = rightArr[t]
      }
      rightArr[i] = t
    }

    for (let i = 0; i < arr.length; i++) {
      // 这个宽度相当于中间超过arr[i]高度的元素个数（包括i本身）
      // 比如1354621
      // 这里第四个元素，两边比他小的下标分别为1,5，宽度为5-1-1 = 3
      // 也就是“5”，“4”，“6”这三个元素，可以副高4这个高度，所以面积是4*3 = 12
      let w = rightArr[i] - leftArr[i] - 1
      max = Math.max(max, w * arr[i])
    }

    return max
  }
  // 记录每一行的高度
  let max = 0
  let heightArr = new Array(matrix[0].length).fill(0)
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === "0") {
        heightArr[j] = 0
      } else {
        heightArr[j] += 1
      }
    }

    // 把每一行当做柱状图去处理
    max = Math.max(findMaxMatrix(heightArr), max)
  }

  return max
};
// @lc code=end

