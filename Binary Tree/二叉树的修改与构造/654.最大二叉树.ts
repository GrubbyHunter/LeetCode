/*
 * @lc app=leetcode.cn id=654 lang=typescript
 *
 * [654] 最大二叉树
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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null
  }

  if (nums.length === 1) {
    return new TreeNode(nums[0])
  }

  let max = Number.MIN_SAFE_INTEGER
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
      index = i
    }
  }

  let left = nums.slice(0, index)
  let right = nums.slice(index + 1)

  return new TreeNode(max,
    constructMaximumBinaryTree(left),
    constructMaximumBinaryTree(right))

};
// @lc code=end

