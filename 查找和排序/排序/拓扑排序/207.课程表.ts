/*
 * @lc app=leetcode.cn id=207 lang=typescript
 *
 * [207] 课程表
 */

// @lc code=start
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // 统计每门课的入度值
  let inArr = new Array(numCourses).fill(0)
  // 记录每门课需要依赖的其他课
  let map = new Map()
  for (let i = 0; i < prerequisites.length; i++) {
    // 这里只学numCourses门课，所以数组中最多只需要记录numCourses个入度值
    // 数组第0个元素依赖第1个元素，所以直接·累加第0个元素的入度值
    inArr[prerequisites[i][0]]++

    // 记录第1个元素，有几个出度，放入数组
    if (!map.get(prerequisites[i][1])) {
      map.set(prerequisites[i][1], [prerequisites[i][0]])
    } else {
      map.get(prerequisites[i][1]).push(prerequisites[i][0])
    }
  }

  let queue = []
  // 统计入度为0的可，用来作为轮循的起始
  for (let i = 0; i < inArr.length; i++) {
    if (inArr[i] === 0) {
      queue.push(i)
    }
  }

  let count = 0
  while (queue.length > 0) {
    // 第一个入度为0的可，作为起点
    let start = queue.shift()
    // 学的课程 + 1
    count++

    // 学完start可以学的课程列表
    let endList = map.get(start) || []
    for (let i = 0; i < endList.length; i++) {
      let index = endList[i]
      // 由于start被学了，所以他的下一们可以学的课，入度值需要-1
      inArr[index]--

      // 当前课程的入度值为了，push进对了，表示可以进行学习了
      if (inArr[index] === 0) {
        queue.push(index)
      }
    }

  }


  // 所学课程达到需要课程数，满足条件
  return count === numCourses
};
// @lc code=end

