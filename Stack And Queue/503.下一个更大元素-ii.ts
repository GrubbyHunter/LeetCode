/*
 * @lc app=leetcode.cn id=503 lang=typescript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
function nextGreaterElements(nums: number[]): number[] {
  let signleStack = [0];
  // 初始化数组所有元素为-1
  // 因为最后遍历完成，stack中肯定剩一个最大数的下标
  // 这里不用再单独给他这个下标赋值
  // 同事如果数组所有数都相等，那么不会进入循环，每个元素都不存在比它大的数，都是-1，直接可以返回
  let result = new Array(nums.length).fill(-1);

  // 循环数组，相当于数组走两遍，所有nums.length要乘以2
  for (let i = 1; i < nums.length * 2; i++) {
    // 当前元素找到正确的位置
    // 这里面所有的下标i都要求余数 %nums.length，避免下标越界
    while (
      signleStack.length > 0 &&
      nums[i % nums.length] > nums[signleStack[signleStack.length - 1]]
    ) {
      // 把比当前元素大的推出单调降序栈
      let index = signleStack.pop();
      // 记录这个比他大的元素
      result[index] = nums[i % nums.length];
    }

    // 当前元素push进单调降序栈
    signleStack.push(i % nums.length);
  }

  return result;
}

// @lc code=end
