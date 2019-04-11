/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 *
 * https://leetcode-cn.com/problems/missing-number/description/
 *
 * algorithms
 * Easy (49.20%)
 * Total Accepted:    17.3K
 * Total Submissions: 35K
 * Testcase Example:  '[3,0,1]'
 *
 * 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
 *
 * 示例 1:
 *
 * 输入: [3,0,1]
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: [9,6,4,2,3,5,7,0,1]
 * 输出: 8
 *
 *
 * 说明:
 * 你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?
 *
 */
/**每个元素进行^异或运算的结果都是0，数组下标针对
 * 数组中有个同样的元素，依次进行异或运算，最终的结果
 * 就是那个只出现一次的值
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let result = nums.length
  for (let i = 0, j = nums.length; i < j; i++) {
    result ^= nums[i] ^ i
  }

  return result
}
