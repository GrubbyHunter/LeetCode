// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
function leastInterval(tasks: string[], n: number): number {
  let map: any = {};
  let maxCount = 0;
  let maxSize = 0;

  if (n === 0) {
    return tasks.length;
  }

  for (let task of tasks) {
    if (map[task]) {
      // 统计每种任务出现的数量
      map[task] = map[task] + 1;
      // 记录出现最多的任务次数
      maxCount = Math.max(maxCount, map[task]);
    } else {
      map[task] = 1;
    }
  }

  // 出现最多的有maxCount次，记录有maxCount次的任务个数
  for (let key in map) {
    if (map[key] === maxCount) {
      maxSize++;
    }
  }

  let result = (maxCount - 1) * (n + 1) + maxSize;

  return Math.max(result, tasks.length);
}
leastInterval(["A", "A", "A", "B", "B", "B"], 2);
// @lc code=end
