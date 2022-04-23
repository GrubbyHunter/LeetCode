/*
 * @lc app=leetcode.cn id=1302 lang=typescript
 *
 * [1302] 层数最深叶子节点的和
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

function deepestLeavesSum(root: TreeNode | null): number {
  if (!root) {
    return 0
  }

  let sum = 0
  let queue = [root]

  while (queue.length > 0) {
    let length = queue.length
    sum = 0
    for (let i = 0; i < length; i++) {
      let cur = queue.shift()

      sum += cur.val
      if (cur.left) {
        queue.push(cur.left)
      }

      if (cur.right) {
        queue.push(cur.right)
      }

    }
  }

  return sum
};
// @lc code=end

