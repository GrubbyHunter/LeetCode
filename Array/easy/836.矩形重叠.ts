/*
 * @lc app=leetcode.cn id=836 lang=typescript
 *
 * [836] 矩形重叠
 */

// @lc code=start
function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
  if (rec1[3] <= rec2[1] || rec2[3] <= rec1[1] || // 纵坐标，rec1的右边小于等于rec2的左边
    rec1[2] <= rec2[0] || rec2[2] <= rec1[0]) { // 横坐标，rec1的下边小于等于rec2的上边
    return false
  }

  return true
};
// @lc code=end

