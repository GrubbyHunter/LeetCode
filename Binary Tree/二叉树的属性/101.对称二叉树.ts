/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return false
  }

  let queue = [root.left, root.right]

  while (queue.length > 0) {
    // 每次取两个节点进行比对
    let left = queue.shift()
    let right = queue.shift()

    // 节点都不为空
    if (left && right) {
      // 判断值是否相等
      if (left.val !== right.val) {
        return false
      }
      // 将需要比较的节点按顺序继续放入队列
      queue.push(left.left)
      queue.push(right.right)
      queue.push(left.right)
      queue.push(right.left)
    } else if (!left && right) {
      return false
    } else if (left && !right) {
      return false
    }
  }
  // 遍历完成
  return true
};
// @lc code=end

