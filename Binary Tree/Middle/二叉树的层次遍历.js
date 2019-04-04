/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (54.76%)
 * Total Accepted:    21.1K
 * Total Submissions: 38.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 *
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回其层次遍历结果：
 *
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
 *
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 解法：
 * 普通的BFS遍历二叉树虽然保证了层级的执行顺序，但是
 * 没法将每一层级的元素放在一个数组里面，所以这里是嵌
 * 套循环，里面的循环将当前层级的节点给消费掉
 *
 * 复杂度是O(n^2)
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let array = []
  let queue = []

  if (!root) {
    return []
  }

  queue.push(root)

  while (queue.length > 0) {
    let child = []
    // 这里是核心赋值，就是保存当前队列的长度
    // 也就是当前队列保存的事当前层级的节点
    // for循环里面虽然改变了队列的长度，但是依然只
    // 消费length长度的节点
    let length = queue.length

    // 消费当前层级节点，将每个节点的left和right、
    // 又存入队列
    for (let i = 0; i < length; i++) {
      let item = queue.shift()

      if (item.val != null) {
        child.push(item.val)
      }

      // 存入队列
      item.left && queue.push(item.left)
      item.right && queue.push(item.right)
    }

    if (child.length > 0) {
      array.push(child)
    }
  }

  return array
}
