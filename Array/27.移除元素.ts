/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  // 双指针法，slow记录当前满足条件的数组位置
  let slowIndex = 0

  // fast 遍历整个输入
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    // 碰到符合条件的值
    if (nums[fastIndex] !== val) {
      // 移到前面
      nums[slowIndex] = nums[fastIndex]
      // slow记录后面移动过来的值后+1，往后走一位
      slowIndex++
    }
  }

  return slowIndex
};
// @lc code=end

