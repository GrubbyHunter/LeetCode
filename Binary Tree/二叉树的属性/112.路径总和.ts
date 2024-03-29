/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  const getSum = (sum: number, node: TreeNode | null) => {
    if (!node) {
      return -1
    }

    if (!node.left && !node.right) {
      if (node.val === sum) {
        return 0
      } else {
        return -1
      }
    }

    let result = sum - node.val
    let left = getSum(result, node.left)
    if (left === 0) {
      return 0
    }

    let right = getSum(result, node.right)
    if (right === 0) {
      return 0
    }

    return -1
  }

  return getSum(targetSum, root) === 0
};
// @lc code=end

