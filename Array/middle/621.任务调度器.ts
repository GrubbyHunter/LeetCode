/*
 * @lc app=leetcode.cn id=621 lang=typescript
 *
 * [621] 任务调度器
 */

// @lc code=start
function leastInterval(tasks: string[], n: number): number {
  let map = {};
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

  // 将相同的任务出现最多的按列从左到右填充
  /**
   *  ABCDE
   *  ABCDE
   *  ABCD
   *  AB
   */
  // 行 * 列 = 最后一行可以填充，所以行-1，不算最后一行。
  // 列的话需要间隔n，那么列宽就是n+1，出现最多的任务在最左边，所以，最后一行个数就是出现最多任务的个数maxSize
  // A和B都出现4次，所以maxSize为2，最后一行数量为2
  let result = (maxCount - 1) * (n + 1) + maxSize;

  // 有5种任务，如果n大于等于5，可以用上述公式，但是如果n小于5，实际上列就不是n
  // 这时候，tasks自身不需要填充就能满足条件
  // 所以结果是在tasks的长度（种类大于n不需要填充）和计算的填充长度中取较大值（种类小于n，需要填充）
  return Math.max(result, tasks.length);
}
// @lc code=end
