/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
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

function postorderTraversal(root: TreeNode | null): number[] {

  let result = []

  const endTraversal = (tree: TreeNode | null): void => {
    if (!tree) {
      return
    }
    endTraversal(tree.left)
    endTraversal(tree.right)
    result.push(tree.val)
  }

  endTraversal(root)

  return result
};

// @lc code=end

