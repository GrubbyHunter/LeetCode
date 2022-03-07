/*
 * @lc app=leetcode.cn id=116 lang=typescript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
  let queue = [root]
  // 层级遍历遍历
  while (queue.length > 0) {
    let length = queue.length
    // 每一层进来preNode初始化
    let preNode: any = null

    for (let i = 0; i < length; i++) {
      let current: any = queue.shift()

      if (!current) {
        continue
      }

      // 同一层级上一个节点的next指向当前节点
      if (preNode) {
        preNode.next = current
      }

      // 将每一层最后一个节点的next设置为null
      if (i === length - 1) {
        current.next = null
      }

      queue.push(current.left)
      queue.push(current.right)

      preNode = current
    }
  }

  return root
};
// @lc code=end

