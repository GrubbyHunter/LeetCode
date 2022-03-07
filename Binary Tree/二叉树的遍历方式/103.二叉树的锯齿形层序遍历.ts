/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  // 用队列进行广地递归
  let queue = [root]
  let result: any = []

  // 记录遍历方向
  let isLeftToRight = true

  while (queue.length > 0) {
    let length = queue.length
    let child = []

    // 遍历一层
    for (let i = 0; i < length; i++) {
      // 从左到右的话，从头部开始取元素，反之从尾部取
      let current = isLeftToRight ? queue.shift() : queue.pop()
      if (!current) {
        continue
      }
      // push当前节点到子数组
      child.push(current.val)

      // 当前层从左往右，下一层是从右往左，下一层从尾部取值
      if (isLeftToRight) {
        // 保持先左后右的顺序
        queue.push(current.left)
        queue.push(current.right)
      } else {
        // 当前层从右往左，下一层是从左往右，并且从头部取值
        // 头部取值，则需要将下一层的节点想依次从头部插入
        // 因为要维持先左后右的顺序，需要先unshift right
        queue.unshift(current.right)
        queue.unshift(current.left)
      }
    }
    if (child.length > 0) {
      result.push(child)
    }

    // 左右顺序切换
    isLeftToRight = !isLeftToRight
  }

  return result
};
// @lc code=end

