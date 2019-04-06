/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 *
 * https://leetcode-cn.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (25.06%)
 * Total Accepted:    18.7K
 * Total Submissions: 74.7K
 * Testcase Example:  '[2,1,3]'
 *
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 *
 * 假设一个二叉搜索树具有如下特征：
 *
 *
 * 节点的左子树只包含小于当前节点的数。
 * 节点的右子树只包含大于当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 *
 *
 * 示例 1:
 *
 * 输入:
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入:
 * ⁠   5
 * ⁠  / \
 * ⁠ 1   4
 * / \
 * 3   6
 * 输出: false
 * 解释: 输入为: [5,1,4,null,null,3,6]。
 * 根节点的值为 5 ，但是其右子节点值为 4 。
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
 * 这里二叉排序树需要每棵子树的左边节点的值比他小，右边节点的
 * 值比他大，可以采用DFS首先遍历左边最底部的节点
 * 遍历的时候记录当前的最大值，采用前序遍历，相当于
 * 将树看作一个有序的数组进行处理，判断时候超过这
 * 个最大值，超过的话这不满足条件，停止递归
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let maxNum = undefined
  if (!root) {
    return true
  }
  let status = true
  let middleTraver = tree => {
    if (tree.left) {
      middleTraver(tree.left)
    }

    if (maxNum >= tree.val) {
      status = false
      return status
    }
    if (tree.val != null) {
      maxNum = tree.val
    }

    if (tree.right) {
      middleTraver(tree.right)
    }
  }

  middleTraver(root)

  return status
}
