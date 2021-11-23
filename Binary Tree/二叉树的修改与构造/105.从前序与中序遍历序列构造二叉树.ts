/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) {
    return null
  }

  if (preorder.length === 1) {
    return new TreeNode(preorder[0])
  }

  // 由于前序遍历和中序遍历长度肯定是一样的
  // 所以前序数组不为空，中序数组肯定也不为空
  let top = preorder.shift()
  // 从中序遍历中找到根节点位置
  let index = 0

  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === top) {
      // 根节点位置，也就是切割点位置
      index = i
    }
  }
  // 中序遍历，top节点在中间
  // top节点切割中序数组
  // 这里由于index为top的位置，所以需要index+1，过滤掉top节点
  const leftInorder = inorder.slice(0, index)
  const rightInorder = inorder.slice(index + 1)
  // 前序数组去掉top后，也要切割
  // 因为切割之后左右数组长度肯定和中序一样
  // 所以直接使用跟中序数组一样的长度进行切割
  const leftPreorder = preorder.slice(0, index)
  const rightPreorder = preorder.slice(index)

  return new TreeNode(
    top,
    buildTree(leftPreorder, leftInorder),
    buildTree(rightPreorder, rightInorder))
};
// @lc code=end

