/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

function isValidBST(root: TreeNode | null): boolean {
  // 中序遍历，将二叉搜索树转换为数组
  const array = []
  const getArray = (root) => {
    if (!root) {
      return
    }
    // 使用中序遍历是为了符合二叉搜索树的特性
    // 遍历完他就是一个升序数组
    getArray(root.left)
    array.push(root.val)
    getArray(root.right)
  }

  getArray(root)
  // 如果不是升序数组，则不是二叉搜索树
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= array[i - 1]) {
      return false
    }
  }

  return true
};
// @lc code=end

