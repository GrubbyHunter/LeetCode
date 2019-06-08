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
 * @desc 这个题可以理解为按照层级遍历，然后获取每个层级的最后一个节点
 * 所以使用BFS进行遍历，然后拿到最后一个节点时候放入数组，同时将他自己和前面的元素进行删除
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
        //将他自己和前面的元素进行删除
        queue = queue.slice(i + 1)
      }

      current.left && queue.push(current.left)
      current.right && queue.push(current.right)
    }
  }

  return result
}
