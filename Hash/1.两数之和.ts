/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let result: any = {}
  // 使用result记录已经出现过的元素

  for (let i = 0; i < nums.length; i++) {
    // 另一个数
    let nextOne = target - nums[i]
    // 另一个数已经出现过
    if (typeof result[nextOne] === 'number') {
      // 直接返回另一个数的下标和当前元素的下标
      return [result[nextOne], i]
    } else {
      // 没有出现，记录当前元素
      // result的key为元素的值，value为元素的下标
      result[nums[i]] = i
    }
  }
};
// @lc code=end

