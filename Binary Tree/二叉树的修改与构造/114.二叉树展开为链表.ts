/*
 * @lc app=leetcode.cn id=114 lang=typescript
 *
 * [114] 二叉树展开为链表
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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  if (!root) {
    return
  }

  // 先处理left
  flatten(root.left)
  flatten(root.right)

  // 将左子节点换到右子节点
  let temp = root.right
  root.right = root.left
  root.left = null

  // 找到右子节点(之前的左子节点的最右子节点)
  while (root.right) {
    root = root.right
  }
  // 将原先的右子节点衔接到结尾，组成链表
  root.right = temp
};
// @lc code=end

