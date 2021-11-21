/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

function minDepth(root: TreeNode | null): number {
  let queue = [root]
  let level = 0

  if (!root) {
    return level
  }

  while (queue.length > 0) {
    // 当前层级的左右节点数量
    let size = queue.length

    // 移除当前层级节点，移除出的同时将子节点放入队列
    for (let i = 0; i < size; i++) {
      let node = queue.shift()

      if (node) {
        // 当前即为最小深度
        if (!node.left && !node.right) {
          return ++level
        }

        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
      }
    }
    // 遍历完一层，层级+1
    level++
  }

  return level
};
// @lc code=end

