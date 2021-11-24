/*
 * @lc app=leetcode.cn id=530 lang=typescript
 *
 * [530] 二叉搜索树的最小绝对差
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

function getMinimumDifference(root: TreeNode | null): number {
  let min = Number.MAX_SAFE_INTEGER
  let pre = Number.MAX_SAFE_INTEGER

  // 使用中序遍历，保证遍历二叉搜索树是从小到大的顺序
  const findMinNum = (root: TreeNode | null) => {
    if (!root) {
      return
    }

    findMinNum(root.left)
    const result = Math.abs(root.val - pre)
    min = result > min ? min : result
    pre = root.val
    findMinNum(root.right)
  }

  findMinNum(root)
  return min
};
// @lc code=end

