/*
 * @lc app=leetcode.cn id=230 lang=typescript
 *
 * [230] 二叉搜索树中第K小的元素
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

function kthSmallest(root: TreeNode | null, k: number): number {
  let count = 0
  let result
  // 采用中序遍历
  let dfs = (node: TreeNode | null) => {
    if (!node) {
      return
    }

    dfs(node.left)

    // 中序遍历，处理中间节点
    count++
    if (count === k) {
      result = node.val
      return
    }

    dfs(node.right)
  }

  dfs(root)

  return result
};
// @lc code=end

