/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null
  }

  if (nums.length === 1) {
    return new TreeNode(nums[0])
  }
  // 邮箱高度平衡，所以左右节点数量最好一致
  let mid = Math.floor(nums.length / 2)

  return new TreeNode(nums[mid],
    sortedArrayToBST(nums.slice(0, mid)),
    sortedArrayToBST(nums.slice(mid + 1))
  )
};
// @lc code=end

