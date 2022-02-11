/*
 * @lc app=leetcode.cn id=543 lang=typescript
 *
 * [543] 二叉树的直径
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0

  // 采用后序遍历
  const endTraversal = (tree: TreeNode | null): number => {
    if (!tree.left && !tree.right) {
      return 0
    }

    // 左子节点有值，左子节点+当前节点 = +1
    let leftCount = tree.left ? endTraversal(tree.left) + 1 : 0
    let rightCount = tree.right ? endTraversal(tree.right) + 1 : 0
    // 记录最大直径
    max = Math.max(max, leftCount + rightCount)
    // 返回较大的直径
    return Math.max(leftCount, rightCount)
  }

  if (!root) {
    return 0
  }

  endTraversal(root)

  return max

};
// @lc code=end

