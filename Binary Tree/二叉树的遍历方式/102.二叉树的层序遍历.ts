/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  let currentQueue = [root]
  let nextQueue = []
  let result = []
  let child = []

  if (!root) {
    return []
  }

  while (currentQueue.length > 0) {
    let firstItem = currentQueue.shift()

    if (firstItem) {
      // 记录当前层级的数据
      child.push(firstItem.val)
      // 保留下一个层级的数据
      firstItem.left && nextQueue.push(firstItem.left)
      firstItem.right && nextQueue.push(firstItem.right)
    }

    // 遍历完当前层级
    if (currentQueue.length === 0) {
      // 当前层级的数据追加进二维数组
      result.push(child)
      child = []
      // 下一层级赋值给当前层级
      currentQueue = nextQueue
      // 清空下一层级
      nextQueue = []
    }
  }

  return result
};
// @lc code=end

