/*
 * @lc app=leetcode.cn id=337 lang=typescript
 *
 * [337] 打家劫舍 III
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

function rob(root: TreeNode | null): number {
  // 使用后序遍历，向上转移状态
  // 遍历返回两个结果，分别统计一个节点偷和不偷时的金额
  let afterBinaryTree = (root: TreeNode | null): number[] => {
    // 节点为空，偷和不偷都是0
    if (!root) {
      return [0, 0]
    }

    // 当前节点，不偷是0，偷是当前节点的值
    if (!root.left && !root.right) {
      return [0, root.val]
    }

    let left = afterBinaryTree(root.left)
    let right = afterBinaryTree(root.right)

    // 不偷当前节点，左右子节点可偷可不偷
    // 这时候需要分别获取左右子节点偷和不偷时的较大值，因为当前节点可能存在不偷比偷的值更大
    let notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    // 偷当前节点，左右子节点都不偷，当前节点的值+不偷的情况的值
    let robCurrent = root.val + left[0] + right[0]

    return [notRob, robCurrent]
  }

  let result = afterBinaryTree(root)

  return Math.max(result[0], result[1])
};
// @lc code=end

