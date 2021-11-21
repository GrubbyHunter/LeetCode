/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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
// 获取树的高度，高度是通过最底层的节点来计算的，类似后序遍历
function getHeight(root: TreeNode | null): number {
  if (!root) {
    return 0
  }

  // 左边高度
  let leftHeight = getHeight(root.left)
  if (leftHeight === -1) {
    return - 1
  }

  // 右边高度
  let rightHeight = getHeight(root.right)
  if (rightHeight === -1) {
    return - 1
  }

  // 左右高度差超过1，-1标记为非平衡二叉树
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1
  }

  // 当前层级 + 高度较大的那一边
  return 1 + Math.max(leftHeight, rightHeight)
}
function isBalanced(root: TreeNode | null): boolean {
  return getHeight(root) !== -1
};
// @lc code=end

