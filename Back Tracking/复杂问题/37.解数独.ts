/*
 * @lc app=leetcode.cn id=37 lang=typescript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  // 计算下一个数的坐标
  const nextNumber = (x: number, y: number): any => {
    // 当前行还没到结尾，name当前行+1，纵坐标不变
    if (y < 8) {
      y++
      return { newX: x, nextY: y }
    }

    // 当前行到达最后，跳到下一行第一个，纵坐标+1，横坐标为0
    x++
    return { newX: x, nextY: 0 }
  }

  const backTracking = (x: number, y: number): boolean => {
    // 上一个坐标已经到达结尾的话[8, 8]
    // 按照nextNumber的算法，下一次再进来变成了[9, 0]
    // 所以[9, 0]为结束条件
    if (x === 9 && y === 0) {
      return true
    }

    // 当前位置有数字，跳到下一个位置的坐标
    if (board[x][y] !== ".") {
      const { newX, nextY } = nextNumber(x, y)
      return backTracking(newX, nextY)
    }

    // 当前位置，从1到9一次开始试探是否符合该位置要求
    for (let i = 0; i < 9; i++) {
      let currentNumStr = `${i + 1}`

      // 水平行判断是否重复
      if (board[x].indexOf(currentNumStr) > -1) {
        continue
      }

      // 垂直列判断是否重复
      let hadStr = false
      for (let j = 0; j < 9; j++) {
        if (board[j][y] === currentNumStr) {
          hadStr = true
          break
        }
      }
      if (hadStr) {
        continue
      }

      // 3 * 3方格判断是否重复 
      let startX = Math.floor(x / 3) * 3
      let startY = Math.floor(y / 3) * 3
      for (let m = startX; m < startX + 3; m++) {
        for (let n = startY; n < startY + 3; n++) {
          if (board[m][n] === currentNumStr) {
            hadStr = true
            break
          }
        }
        if (hadStr) {
          break
        }
      }

      if (hadStr) {
        continue
      }

      // 不存在重复，则在数组中赋值 
      board[x][y] = currentNumStr
      // 计算下一个坐标文职
      const { newX, nextY } = nextNumber(x, y)
      // 符合要求则不进行回溯
      if (backTracking(newX, nextY)) {
        return true
      }
      // 不符合要求，回溯当前位置为"."，i + 1,重新测试
      board[x][y] = "."
    }
    // 遍历完所有都不符合要求，返回false
    // 实际上如果数独一定有解法，这里是不会执行的
    return false
  }

  backTracking(0, 0)
};
// @lc code=end

