/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 *
 * https://leetcode-cn.com/problems/power-of-three/description/
 *
 * algorithms
 * Easy (43.16%)
 * Total Accepted:    15.6K
 * Total Submissions: 36.1K
 * Testcase Example:  '27'
 *
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
 *
 * 示例 1:
 *
 * 输入: 27
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: 0
 * 输出: false
 *
 * 示例 3:
 *
 * 输入: 9
 * 输出: true
 *
 * 示例 4:
 *
 * 输入: 45
 * 输出: false
 *
 * 进阶：
 * 你能不使用循环或者递归来完成本题吗？
 *
 */
/**
 * 这道题要求是3的倍数，所以可以使用toString
 * Number类型的变量的toString方法接收一个参数，这个参数可以指定将
 * 变量按照指定的进制进行转化成字符串，比如toString(2)就是转化成二进制的字符串
 * 所以这里可以指定他按照3进制进行转化为字符串（toString(3)）
 * 三进制的转化，每个位数都是除以3所以除了第一位是，其他的都应该是0，
 * 则所有三的倍数转化为三进制字符串都是1后面接N个0，直接用正则表达式进行匹配
 *
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  return /^10*$/.test(n.toString(3))
}
