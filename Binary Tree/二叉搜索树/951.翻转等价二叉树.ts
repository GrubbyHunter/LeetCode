/*
 * @lc app=leetcode.cn id=951 lang=typescript
 *
 * [951] 翻转等价二叉树
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

function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (!root1 && !root2) {
    return true
  }

  // 一个子树为空，一个不为空，返回false
  if (root1 && !root2) {
    return false
  }

  if (root2 && !root1) {
    return false
  }
  // 当前节点不相等，直接返回false
  if (root1.val !== root2.val) {
    return false
  }
  // (左左子树相等 && 右右子树相等) || (左右子树相等)
  // 满足其中一种即可
  return (flipEquiv(root1.left, root2.left)
    && flipEquiv(root1.right, root2.right))
    || (flipEquiv(root1.left, root2.right)
      && flipEquiv(root1.right, root2.left))
};
// @lc code=end

