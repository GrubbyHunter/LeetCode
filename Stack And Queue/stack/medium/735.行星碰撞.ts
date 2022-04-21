/*
 * @lc app=leetcode.cn id=735 lang=typescript
 *
 * [735] 行星碰撞
 */

// @lc code=start
function asteroidCollision(asteroids: number[]): number[] {
  let stack: number[] = new Array();
  let start = 0;
  // 将从开始位置起的负数优先放入队列
  // 因为负数是往左飞行，如果前面没有正数，基本不会发生碰撞
  for (; start < asteroids.length; start++) {
    if (asteroids[start] > 0) {
      break;
    }
    stack.push(asteroids[start]);
  }

  for (; start < asteroids.length; start++) {
    // 大于0，往右飞，先放入栈
    if (asteroids[start] > 0) {
      stack.push(asteroids[start]);
      continue;
    }

    // 标记碰撞完是否需要放入栈
    let needPush = true;
    // 小于0，往左飞，会发生碰撞
    // 如果栈内有值，同时是正数(往右飞)，需要进行碰撞比较
    while (stack.length > 0 && stack[stack.length - 1] > 0) {
      let last = stack.pop();

      if (last + asteroids[start] > 0) {
        // 往右边飞的更大,右边飞的继续加回栈，跳出循环
        stack.push(last);
        needPush = false;
        break;
      } else if (last + asteroids[start] === 0) {
        // 跳出循环
        needPush = false;
        break;
      } else {
        // 往左边飞的更大，继续比较下一个
        needPush = true;
      }
    }

    if (needPush) {
      stack.push(asteroids[start]);
    }
  }

  return stack;
}
// @lc code=end
