/*
 * @lc app=leetcode.cn id=474 lang=typescript
 *
 * [474] 一和零
 */

// @lc code=start
function findMaxForm(strs: string[], m: number, n: number): number {
  // dp[i][j]定义为i个0和j个1，所需要的最多数组元素个数
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  // 依然是01背包问题，这里分为0和1两个维度
  for (let str of strs) {
    let zeroNum = 0,
      oneNum = 0;

    // 统计没字符字符串种0和1的数量
    for (let c of str) {
      if (c === "0") {
        zeroNum++;
      } else {
        oneNum++;
      }
    }
    // i 如果小于zeroNum，那么单个字符串的0的个数超过m限制，不能放入结果中，下面j同理
    // 由于是通过i - zeroNum和j - oneNum完成递推，所以采用倒序遍历
    for (let i = m; i >= zeroNum; i--) {
      for (let j = n; j >= oneNum; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1)
      }
    }
  }

  return dp[m][n];
}
// @lc code=end
