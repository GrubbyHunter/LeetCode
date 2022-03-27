/*
 * @lc app=leetcode.cn id=897 lang=typescript
 *
 * [897] 递增顺序搜索树
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

function increasingBST(root: TreeNode | null): TreeNode | null {
  let pre = new TreeNode()
  let start = pre

  let bfs = (root) => {
    if (!root) {
      return
    }

    bfs(root.left)

    // 添加节点
    pre.right = new TreeNode(root.val);
    // 继续向右节点添加
    pre = pre.right;

    bfs(root.right)
  }

  bfs(root)

  return start.right
};
// @lc code=end

