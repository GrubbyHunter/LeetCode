/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  let queue = []
  let result = []

  if (!root || !root.val) {
    return result
  }

  queue.push(root)

  while (queue.length > 0) {
    let length = queue.length

    for (let i = 0; i < length; i++) {
      let current = queue[i]

      if (i == length - 1) {
        result.push(current.val)
        queue = queue.slice(i + 1)
      }

      current.left && queue.push(current.left)
      current.right && queue.push(current.right)
    }
  }

  return result
}
