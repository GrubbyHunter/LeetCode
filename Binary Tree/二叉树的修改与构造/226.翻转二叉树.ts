/*
 * @lc app=leetcode.cn id=226 lang=typescript
 *
 * [226] 翻转二叉树
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
// 直接递归实现
function invertTree(root: TreeNode | null): TreeNode | null {
  const exchangeTree = (tree: TreeNode | null): void => {
    if (!tree) {
      return
    }

    let temp = tree.left
    tree.left = tree.right
    tree.right = temp

    exchangeTree(tree.left)
    exchangeTree(tree.right)
  }

  exchangeTree(root)

  return root
};
// @lc code=end

