/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function getPath(str: string, root: TreeNode | null, result: any): void {
  if (!root) {
    return
  }

  if (!str) {
    str = root.val + ""
  } else {
    str += "->" + root.val
  }

  // 到达根节点，push进结果
  if (!root.left && !root.right) {
    result.push(str)
    return
  }

  getPath(str, root.left, result)
  getPath(str, root.right, result)
}

function binaryTreePaths(root: TreeNode | null): string[] {
  const result = []
  getPath("", root, result)
  return result
};
// @lc code=end

