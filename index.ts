// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function findRadius(houses: number[], heaters: number[]): number {
  let radius = 0;

  for (let i = 0; i < houses.length; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < heaters.length; j++) {
      min = Math.min(min, Math.abs(houses[i] - heaters[j]));
    }
    radius = Math.max(radius, min);
  }

  return radius;
}
findRadius([1, 2, 3, 4], [1, 4]);
