/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  let result: string[] = []

  let dfs = (leftCount: number, rightCount: number, str: string) => {
    // 左右括号都满足数量，先处理中间节点，可以理解为二叉树的前序遍历
    if (leftCount === n && rightCount === n) {
      // 记录结果
      result.push(str)
      return
    }

    // 左括号小于n，继续加左括号
    // 剪枝操作：count < n
    if (n > leftCount) {
      dfs(leftCount + 1, rightCount, str + "(")
    }

    // 因为先加左括号，左括号大于右括号，那么加右括号
    // leftCount > rightCount,必须以左括号开头
    if (leftCount > rightCount) {
      dfs(leftCount, rightCount + 1, str + ")")
    }
  }

  dfs(0, 0, "")
  return result
};
// @lc code=end

