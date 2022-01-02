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
  // 遍历返回两个结果，粉笔恩施一个节点偷和不偷时的金额
  let afterBinaryTree = (root: TreeNode | null): number[] => {
    // 节点为空，偷和不偷都是0
    if (!root) {
      return [0, 0]
    }

    // 叶子结点，不偷就位0，偷的话为他本身的金额
    if (!root.left && !root.right) {
      return [0, root.val]
    }

    // 返回左右子节点的结果
    let left = afterBinaryTree(root.left)
    let right = afterBinaryTree(root.right)

    // 不偷当前节点，左子节点和右子节点可偷可不偷
    // 分别取左子节点和又子节点两种状态的最大值相加
    let result1 = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    // 偷当前节点，左右子节点不偷
    // 当前节点的值 + 左右子节点不偷的值
    let result2 = root.val + left[0] + right[0]

    return [result1, result2]
  }

  let result = afterBinaryTree(root)

  return Math.max(result[0], result[1])
};
// @lc code=end

