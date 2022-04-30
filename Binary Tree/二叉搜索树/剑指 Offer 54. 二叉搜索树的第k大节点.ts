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
 * 给定一棵二叉搜索树，请找出其中第 k 大的节点的值。

 

示例 1:

输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4
示例 2:

输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 4
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
 */

function kthLargest(root: TreeNode | null, k: number): number {
  let result = 0
  let midOrder = (root: TreeNode | null): void => {
    if (!root) {
      return
    }

    midOrder(root.right)
    k--
    if (k === 0) {
      result = root.val
      return
    }

    midOrder(root.left)
  }

  midOrder(root)
  return result
};