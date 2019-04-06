/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 *
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * algorithms
 * Easy (62.02%)
 * Total Accepted:    15.8K
 * Total Submissions: 25.5K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 *
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 *
 * 示例:
 *
 * 给定有序数组: [-10,-3,0,5,9],
 *
 * 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
 *
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
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
 * 由于是需要保证平衡二叉树，所有要保证任何子树两边的元素
 * 个数一致，所有每次的左右子节点都从数组的中间开始选
 * 比如[1,2,3,4,5]
 * 先选3作为中间点，然后从[1,2]和[4,5]中去找做左
 * 节点和右节点，以此类推进行递归
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  let middle = Math.floor(nums.length / 2)
  let leftArray = nums.slice(0, middle)
  let rightArray = nums.slice(middle + 1)

  if (nums.length == 0) {
    return null
  }

  let root = new TreeNode(nums[middle])

  if (leftArray.length > 0) {
    root.left = sortedArrayToBST(leftArray)
  }

  if (rightArray.length > 0) {
    root.right = sortedArrayToBST(rightArray)
  }

  return root
}
