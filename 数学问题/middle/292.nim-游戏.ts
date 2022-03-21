/*
 * @lc app=leetcode.cn id=292 lang=typescript
 *
 * [292] Nim 游戏
 */

// @lc code=start
function canWinNim(n: number): boolean {
  // 只要n是4的倍数，先手的人肯定会输
  // 因为，只要他拿了，不管拿多少，另一恶人拿后会继续将剩下的变成4的倍数，直到他拿到最后一个
  // 换成dp可以理解为:
  // if(dp[n-1] && dp[n-3] && dp[n-3] ) dp[n] =  false 
  // else dp[n] = true
  // 也就是n的前1个，2个，3个的情况，另一个人都拿完了，所以dp[n]为false
  // 如果只要其中一种情况拿不完，那剩下的又轮到先手的人拿完

  // 相当于每隔3个数，dp[n] = false，还是跟上面4的倍数结论一致
  return n % 4 !== 0
};
// @lc code=end

