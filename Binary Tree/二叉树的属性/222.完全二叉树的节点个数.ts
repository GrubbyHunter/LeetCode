/*
 * @lc app=leetcode.cn id=222 lang=typescript
 *
 * [222] 完全二叉树的节点个数
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
// 获取树的层级
function getLevel(root: TreeNode | null): number {
  let level = 0

  while (root) {
    root = root.left
    level++
  }

  return level
}

function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0
  }

  let leftLevel = getLevel(root.left)
  let rightLevel = getLevel(root.right)

  // 左右层级相等，说明最后一个节点在右树
  if (leftLevel === rightLevel) {
    // 满左树节点数量 + midle节点 + 右子树的节点 
    return (Math.pow(2, leftLevel) - 1) + 1 + countNodes(root.right)
  } else {
    // 层级不相等，则右子树的 上一层是满节点
    // 满右子树 + midle节点 + 左子树的节点数量
    return (Math.pow(2, rightLevel) - 1) + 1 + countNodes(root.left)
  }
};
// @lc code=end

