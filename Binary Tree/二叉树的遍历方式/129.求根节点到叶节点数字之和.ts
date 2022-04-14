/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根节点到叶节点数字之和
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

function sumNumbers(root: TreeNode | null): number {
  let result = 0
  const midSearch = (root: TreeNode | null, sum) => {
    if (!root) {
      return
    }

    // 累加，1 + 2 变成 12 所以 1 要乘以 10
    sum = sum * 10 + root.val
    if (!root.left && !root.right) {
      result = result + sum
      return
    }

    midSearch(root.left, sum)
    midSearch(root.right, sum)
  }

  midSearch(root, 0)
  return result
};
// @lc code=end

