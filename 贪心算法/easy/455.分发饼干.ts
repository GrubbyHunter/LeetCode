/*
 * @lc app=leetcode.cn id=455 lang=typescript
 *
 * [455] 分发饼干
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
  let gIndex = 0
  // 先进行升序排列
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  // 局部最优解，小饼干先满足小胃口的人
  // 因为是升序，小饼干如果满足同时可以满足大胃口和小胃口
  // 如果满足了大胃口，那么后续的饼干需要去满足更大胃口的
  // 如果满足了小胃口，那么后续的饼干直系要满足当前的大胃口，优于上面
  for (let i = 0; i < s.length; i++) {
    // 这里没有采用两个for轮循
    // 外部遍历饼干，内部采用自增的方式进行遍历小孩
    // gIndex控制小孩数组的下标
    // 小孩被满足，i++,gIndex++，都走到下一个
    // 小孩没被满足，只i++寻找下一个饼干
    if (gIndex < g.length && g[gIndex] <= s[i]) {
      // 满足条件，当前sIndex小孩被满足，跳到下一个小孩
      gIndex++;
    }
  }

  return gIndex
};
// @lc code=end

