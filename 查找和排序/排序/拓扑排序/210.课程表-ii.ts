/*
 * @lc app=leetcode.cn id=210 lang=typescript
 *
 * [210] 课程表 II
 */

// @lc code=start
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  let inArr = new Array(numCourses).fill(0);
  let map = {};

  for (let i = 0; i < prerequisites.length; i++) {
    // 统计入度值
    inArr[prerequisites[i][0]]++;

    // 统计出度
    if (map[prerequisites[i][1]]) {
      map[prerequisites[i][1]].push(prerequisites[i][0]);
    } else {
      map[prerequisites[i][1]] = [prerequisites[i][0]];
    }
  }

  let queue = [];

  // 入度为0的，也就是起始位置，放入队列
  for (let i = 0; i < inArr.length; i++) {
    if (inArr[i] === 0) {
      queue.push(i);
    }
  }
  let result = [];
  // 入度为0的作为起点开始遍历
  while (queue.length > 0) {
    // 入度为0的作为起点开始遍历
    let start = queue.shift();
    result.push(start);

    let nextArr = map[start] || [];
    for (let i = 0; i < nextArr.length; i++) {
      let index = nextArr[i];

      inArr[index]--;

      // 入度为0，可以作为起点
      if (inArr[index] == 0) {
        queue.push(index);
      }
    }
  }

  return result.length === numCourses ? result : [];
}
// @lc code=end
