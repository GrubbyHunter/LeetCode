/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根节点到叶节点数字之和
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

function sumNumbers(root: TreeNode | null): number {
  let result = 0
  let queue = new Array()

  if (!root) {
    return 0
  }

  // 队列保存顶点和他对应的值
  queue.push(root)

  while (queue.length > 0) {
    let length = queue.length
    // BFS广度遍历，遍历当前层级
    for (let i = 0; i < length; i++) {
      let topNode = queue.shift()

      // 叶子结点，直接记录到总和中
      if (!topNode.left && !topNode.right) {
        result += topNode.val
        continue
      }

      // 将左节点的值加上他父节点的值*10，放入到队列中，下一个for循环汇总使用
      // 相当于把和累加继续往下传
      if (topNode.left) {
        topNode.left.val = topNode.val * 10 + topNode.left.val
        queue.push(topNode.left)
      }

      if (topNode.right) {
        topNode.right.val = topNode.val * 10 + topNode.right.val
        queue.push(topNode.right)
      }
    }

  }
  return result
};
// @lc code=end

