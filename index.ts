/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function findContentChildren(g: number[], s: number[]): number {
  let count = 0
  let sIndex = 0
  // 先进行升序排列
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  for (let i = 0; i < g.length; i++) {
    // 找到满足当前小孩投喂条件的第一个饼干
    while (g[i] > s[sIndex] && sIndex < s.length) {
      sIndex++
    }

    // 饼干投喂完成
    if (sIndex >= s.length) {
      return count
    }
    // 小孩得到满足，数量+1
    count++
    sIndex++
  }

  return count
};
findContentChildren([1, 2, 3], [1, 1])

// @lc code=end

