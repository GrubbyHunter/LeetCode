/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function dailyTemperatures(temperatures: number[]): number[] {
  let singleStack = [0]; // 使用数组简单模拟一个单调栈
  let result = []; // 记录结果

  for (let i = 1; i < temperatures.length; i++) {
    while (singleStack.length > 0) {
      let length = singleStack.length;
      // 栈中最后一个元素的下标
      let index = singleStack[length - 1];

      // 当天温度小于或者等于之前最近一天的温度
      if (temperatures[i] <= temperatures[index]) {
        // 将当天的下标i放入栈，依然维持栈的降序排列
        singleStack.push(i);
        // 跳出当前层循环
        break;
      } else {
        // 当天温度大于之前最近一天的温度，最近的一天后面找到比他高温度的一天，记录结果
        // 例如index为第4天，i为5，那么result中第三个元素的值等于5-3 =2，表示第四天后面到第六天温度会比他搞
        result[index] = i - index;

        // 不满足降序栈，弹出当前栈最近的一天
        singleStack.pop();
      }
    }

    // 遍历完成，找到i正确的位置
    singleStack.push(i); // 推入i
  }

  // 遍历完成，如果栈中还有元素，此时已然是一个降序的栈
  for (let i = 0; i < singleStack.length; i++) {
    let index = singleStack[i];
    //将剩下元素的下标日期赋值为0，因为，他们后面没有比他们温度高的日期
    result[index] = 0;
  }

  return result;
}
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
// @lc code=end
