/*
 * @lc app=leetcode.cn id=475 lang=typescript
 *
 * [475] 供暖器
 */

// @lc code=start
function findRadius(houses: number[], heaters: number[]): number {
  let radius = 0;

  for (let i = 0; i < houses.length; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    // 当前房子前面有供暖，或者后面有供暖，取半径小的那个
    for (let j = 0; j < heaters.length; j++) {
      min = Math.min(min, Math.abs(houses[i] - heaters[j]));
    }

    // 每个房子的供暖半径，取最大的那个
    radius = Math.max(radius, min);
  }

  return radius;
}
// @lc code=end
