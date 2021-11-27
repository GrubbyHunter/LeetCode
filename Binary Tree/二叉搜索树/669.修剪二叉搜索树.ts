/*
 * @lc app=leetcode.cn id=669 lang=typescript
 *
 * [669] 修剪二叉搜索树
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

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  if (!root) {
    return null
  }

  // 整个区间都在左边
  if (root.val > high) {
    return trimBST(root.left, low, high)
  }
  // 整个区间都在右边
  if (root.val < low) {
    return trimBST(root.right, low, high)
  }

  // 当前节点符合区间，继续寻找左右两侧边界
  // 上面如果root.val > high，返回的是左子修剪后的值，相当于把当前节点删除了
  root.left = trimBST(root.left, low, high)
  root.right = trimBST(root.right, low, high)

  return root
};
// @lc code=end

