/*
 * @lc app=leetcode.cn id=513 lang=typescript
 *
 * [513] 找树左下角的值
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

function findBottomLeftValue(root: TreeNode | null): number {
  let result = 0
  let maxLevel = 0

  // 寻找最左子节点递归函数‘
  const findLastLeft = (level: number, node: TreeNode | null): void => {
    if (!node) {
      return
    }

    // 符合条件
    if (!node.left && !node.right) {
      if (level > maxLevel) {
        result = node.val
        maxLevel = level
      }
      return
    }

    findLastLeft(level + 1, node.left)
    findLastLeft(level + 1, node.right)
  }

  findLastLeft(1, root)

  return result
};
// @lc code=end

