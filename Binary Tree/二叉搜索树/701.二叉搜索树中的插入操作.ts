/*
 * @lc app=leetcode.cn id=701 lang=typescript
 *
 * [701] 二叉搜索树中的插入操作
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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return new TreeNode(val)
  }

  // 然后进行中序遍历，找到最左边节点的正确位置
  const exchangeNode = (current: TreeNode | null) => {
    if (!current) {
      return
    }

    if (current.val > val) {
      if (!current.left) {
        current.left = new TreeNode(val)
        return
      }
      exchangeNode(current.left)
    } else if (current.val < val) {
      if (!current.right) {
        current.right = new TreeNode(val)
        return
      }
      exchangeNode(current.right)
    }
  }

  exchangeNode(root)

  return root
};
// @lc code=end

