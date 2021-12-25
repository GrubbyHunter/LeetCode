/*
 * @lc app=leetcode.cn id=968 lang=typescript
 *
 * [968] 监控二叉树
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

function minCameraCover(root: TreeNode | null): number {
  let count = 0

  // 0-没有被覆盖，1-有摄像头，2-有被覆盖
  // 为了节省节点，叶子结点尽量不要放摄像头，优先从叶子结点的父节点放摄像头
  // 这样同时可以监控上和下，所以使用后序遍历，通过叶子结点，判断父节点是否需要摄像头
  let findNodeLight = (node: TreeNode | null): number => {
    // 空节点，则此节点有被覆盖
    if (!node) {
      return 2
    }

    let left = findNodeLight(node.left)
    let right = findNodeLight(node.right)

    // 右子树和左子树都有被覆盖，为了节省摄像头，那么父节点应该是0，没有被覆盖
    if (left === 2 && right === 2) {
      return 0
    }

    // 右子树和左子树其中一个没有被覆盖，那么父节点需要放摄像头，count++
    // 父节点为1，表示有摄像头
    if (left === 0 || right === 0) {
      count++
      return 1
    }

    // 左右其中一个有摄像头，父节点可被覆盖，不用放摄像头，返回2
    if (left === 1 || right === 1) {
      return 2
    }
  }

  // 根节点没有被覆盖，count需要多加一个
  if (findNodeLight(root) === 0) {
    count++
  }

  return count
};
// @lc code=end

