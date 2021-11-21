/*
 * @lc app=leetcode.cn id=404 lang=typescript
 *
 * [404] 左叶子之和
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

function sumOfLeftLeaves(root: TreeNode | null): number {
  // 判断当前是否是左叶子节点
  let sum = 0

  const getSum = (isLeft: boolean, node: TreeNode | null): void => {
    if (!node) {
      return
    }

    if (!node.left && !node.right) {
      if (isLeft) {
        sum += node.val
      }
      return
    }
    // 继续寻找左叶子结点
    getSum(true, node.left)// 左节点标记为true
    getSum(false, node.right) //右节点标记为true
  }

  getSum(false, root)

  return sum
};
// @lc code=end

