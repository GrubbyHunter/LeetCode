/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
  输入一个字符串，打印出该字符串中字符的所有排列。
  你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
  示例:
  输入：s = "abc"
  输出：["abc","acb","bac","bca","cab","cba"]
  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof
 */

// @lc code=start
// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function permutation(s: string): string[] {
  let result: string[] = []
  let length: number = s.length
  let used: any = {}
  const backTracking = (str: string): void => {
    if (str.length === length) {
      result.push(str)
      return
    }

    for (let i = 0; i < length; i++) {

      // used[i - 1] === false，说明上一个节点没被使用，跟他是同一层级
      // 需要进行去重
      if (i > 0 && s[i] === s[i - 1] && !used[i - 1]) {
        // 这里只是当前数和上一个数相等，需要跳过当前数，到下一个数在进行回溯
        // 所以用continue只结束当前次遍历，而不是结束整个遍历
        continue
      }

      // 已经被使用过，不再使用
      if (used[i]) {
        continue
      }

      used[i] = true
      backTracking(str + s[i])
      // 回溯
      used[i] = false
    }
  }
  // 字符串先生序排序，以便相同的字母在一起，方便回溯时候s[i] === s[i - 1] 条件比较
  s = s.split("").sort((a, b) => a.localeCompare(b)).join("")
  backTracking("")

  return result
};

// @lc code=end

