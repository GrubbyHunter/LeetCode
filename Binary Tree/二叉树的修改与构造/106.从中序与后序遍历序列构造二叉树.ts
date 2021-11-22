/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (postorder.length === 0) {
    return null
  }

  if (postorder.length === 1) {
    return new TreeNode(postorder[0])
  }

  // 后序遍历的最后一个元素，为tree的顶点
  let top = postorder.pop()
  // 将tree作为分割点进行切割
  let i = 0
  for (; i < inorder.length; i++) {
    // 找到分割的位置
    if (inorder[i] === top) {
      break
    }
  }
  // 切割点将中序数组，切割成，左子树中序和右子树中序
  // 注意top节点在中序数组中间下标为ide位置，所有需要i+1
  let leftInorder = inorder.slice(0, i)
  let rightInorder = inorder.slice(i + 1)


  // 由于两个数组院子同一棵树，所以左右子树长度(节点数量)一定相同
  // 直接使用相同长度切割后序数组，这里top节点刚才已经pop去除，所以不用i+1
  let leftPostorder = postorder.slice(0, i)
  let rightPostorder = postorder.slice(i)

  return new TreeNode(top, buildTree(leftInorder, leftPostorder), buildTree(rightInorder, rightPostorder))
};
// @lc code=end

