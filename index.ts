/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function numTrees(n: number): number {
  let dp: any = new Array(n + 1).fill(0)
  // dp[n]定义为n个数能形成的二叉搜索树总数
  dp[0] = 1
  dp[1] = 1
  dp[2] = 2

  // dp[3] = 以1为头结点的数量 + 以2为头结点的数量 + 以3为头结点的数量 
  // 由于是二叉搜索树，所以
  //      以1为头结点的数量 = 剩下2个节点都在右边，左边0个 = dp[0] * dp[2]
  //      以2为头结点的数量 = 剩下2个节点一左一右= dp[1] * dp[1]
  //      以3为头结点的数量 = 剩下2个节点都在左边，右边0个 = dp[2] * dp[0]
  // 总结：dp[3] = dp[2] * dp[0] + dp[1] * dp[1] + dp[0] * dp[2]

  // 使用双循环将每种场景都遍历出来
  for (let i = 3; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[i - j - 1] * dp[j]
    }
  }

  return dp[n]
};

numTrees(3)
// @lc code=end

