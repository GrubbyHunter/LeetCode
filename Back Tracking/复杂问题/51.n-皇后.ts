/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 */

// @lc code=start
function solveNQueens(n: number): string[][] {
  let result: any = []

  if (n === 1) {
    return [['Q']]
  }
  // 这里Q不能同行也不能同列，所以实际上n个Q，每个Q都是不同行的
  // 使用arr记录每一行的Q的纵坐标，而arr中每个Q的下标则是它的横坐标
  // 比如arr = [2,0,3,1]，表示第一行index=2的地方放Q，第二行index=0的地方放Q，以此类推
  // arr中实际上放的是之前放好了的Q在每一行的横坐标
  // index为当前行的纵坐标
  const backTracking = (index, arr) => {
    // arr等于n说明所有Q都放好了
    if (arr.length === n) {
      const itemArr = []
      // arr中每个元素都转换为字符串
      for (let i = 0; i < arr.length; i++) {
        // 先生成一个n个"."的数组
        let strArr = new Array(n).fill(".")
        // index=2的地方将"."变成"Q"
        strArr.splice(arr[i], 1, "Q")
        // 就变成了["..Q."]
        itemArr.push(strArr.join(""))
      }
      // 然后对结果进行收集
      result.push([...itemArr])
      return
    }

    // 这里disableIndexArr记录当前index行，哪些下标不能放Q
    const disableIndexArr = []
    for (let j = 0; j < arr.length; j++) {
      // 跟之前元素同一列的下标不能放Q
      disableIndexArr.push(arr[j])

      // 之前元素上右边斜对角线不能放Q
      // 比如第0行index=1
      // 第1行index=2的地方不能放Q 1+(1-0),斜对角线
      // 第2行index=3的地方不能放Q 1+(2-0),斜对角线
      if (arr[j] + (index - j) < n) {
        disableIndexArr.push(arr[j] + (index - j))
      }
      // 之前元素上左边斜对角线不能放Q
      if (arr[j] - (index - j) >= 0) {
        disableIndexArr.push(arr[j] - (index - j))
      }
    }

    for (let i = 0; i < n; i++) {
      // 当前为index行，当前i输入disableIndexArr，则不满足条件
      if (disableIndexArr.indexOf(i) > -1) {
        continue
      }
      // 满足条件放入arr，然后继续其下一行寻找
      arr.push(i)
      backTracking(index + 1, arr)
      arr.pop()
    }
  }

  backTracking(0, [])

  return result
};
// @lc code=end

