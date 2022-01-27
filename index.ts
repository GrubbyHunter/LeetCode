/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function nextGreaterElements(nums: number[]): number[] {
  let signleStack = [0];
  let result = [];

  for (let i = 1; i < nums.length * 2; i++) {
    // 当前元素找到正确的位置
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

  let lastIndex = signleStack[0];
  result[lastIndex] = -1;
  return result;
}
nextGreaterElements([1, 2, 1]);
// @lc code=end
