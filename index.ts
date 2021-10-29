/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
  let startX = 0
  let startY = 0
  // 使用fill填充，初始化一个二维数组
  let result = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let circleCount = Math.floor(n / 2) // 圈数
  let offset = 0 // 已经遍历过的圈数
  let current = 0 // 当前遍历到的数字

  // 当前遍历的圈数达到了指定圈数，则退出循环
  while (offset < circleCount) {
    let i = startX
    let j = startY

    // 左=>右依次赋值，横坐标不变
    // -1是为了不填充最后一个元素，最后一个元素最为下一个填充的首元素
    // 这样每次填充的就都是同一行的数据
    for (; j < n - offset - 1; j++) {
      result[i][j] = ++current
    }

    // 右=>下依次赋值，纵坐标不变
    for (; i < n - offset - 1; i++) {
      result[i][j] = ++current
    }

    // 下=>左依次赋值，横坐标不变
    for (; j > offset; j--) {
      result[i][j] = ++current
    }

    // 左=>上依次赋值，纵坐标不变
    for (; i > offset; i--) {
      result[i][j] = ++current
    }

    // 横坐标和纵坐标都+1，作为下次遍历下一圈的起点位置
    startX++
    startY++
    // 圈数 + 1
    offset++
  }

  if (n % 2 !== 0) {
    result[startX][startY] = ++current
  }

  return result
};
generateMatrix(3)
// @lc code=end

