/*
 * @lc app=leetcode.cn id=633 lang=typescript
 *
 * [633] 平方数之和
 */

// @lc code=start
function judgeSquareSum(c: number): boolean {
  // 双指针，左边从0开始
  let left = 0;
  // 右边从c的平方根开始
  let right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    if (left * left + right * right === c) {
      return true;
    } else if (left * left + right * right > c) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}
// @lc code=end
