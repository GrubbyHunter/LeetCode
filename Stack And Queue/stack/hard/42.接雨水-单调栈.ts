/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
  let singleStack = [0];
  let result = 0;

  for (let i = 1; i < height.length; i++) {
    let topIndex = singleStack[singleStack.length - 1];
    // 小于栈顶元素，则继续push进降序单调栈
    if (height[i] < height[topIndex]) {
      singleStack.push(i);
    } else if (height[i] < height[topIndex]) {
      // 等于栈顶元素，现将栈顶元素下标推出
      singleStack.pop();
      // 将新的下标推入，因为计算宽度时候会使用下标，相当于更新下标（宽度）
      singleStack.push(i);
    } else {
      // 大于栈顶元素，则栈顶元素的前一个元素和栈顶元素，再加上当前元素，形成一个凹槽
      // 需要计算凹槽的体积
      while (
        singleStack.length > 0 &&
        height[i] > height[singleStack[singleStack.length - 1]]
      ) {
        // 栈顶元素下标
        let middleIndex: any = singleStack.pop();
        // 取出栈顶元素后，保证栈不为空，也就是栈的左边还有值，这样左右两边能把中间包住，才能蓄水
        if (singleStack.length > 0) {
          // 宽度为当前元素（右边挡板）下标到栈顶元素（左边挡板）下标的距离
          let w = i - singleStack[singleStack.length - 1] - 1;
          // 高度为左右两边中较矮的将去当前栈顶元素高度
          let h =
            Math.min(height[i], height[singleStack[singleStack.length - 1]]) -
            height[middleIndex];
          // 计算体积
          result += w * h;
        }
      }

      singleStack.push(i);
    }
  }

  return result;
}
// @lc code=end
