// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  let inArr = new Array(numCourses).fill(0);
  let map = new Map();

  for (let i = 0; i < prerequisites.length; i++) {
    // 统计入度值
    inArr[prerequisites[i][0]]++;

    // 统计出度
    let result = map.get(prerequisites[i][1]);
    if (result) {
      map.get(prerequisites[i][1]).push(prerequisites[i][0]);
    } else {
      map.set(prerequisites[i][1], [prerequisites[i][0]]);
    }
  }

  let queue: number[] = [];

  // 入度为0的，也就是起始位置，放入队列
  for (let i = 0; i < inArr.length; i++) {
    if (inArr[i] === 0) {
      queue.push(i);
    }
  }

  let result: any = [];
  // 入度为0的作为起点开始遍历
  while (queue.length > 0) {
    // 入度为0的作为起点开始遍历
    let start = queue.shift();
    result.push(start);

    // 下一个可以学的课程列表
    let nextArr: any = map.get(start) || [];

    for (let i = 0; i < nextArr.length; i++) {
      let index = nextArr[i];

      if (inArr[index]) {
        inArr[index]--;
      }

      // 入度为0，可以作为起点
      if (inArr[index] === 0) {
        queue.push(index);
      }
    }
  }

  return result.length === numCourses ? result : [];
}
findOrder(3, [
  [1, 0],
  [1, 2],
  [0, 1],
]);
// @lc code=end
