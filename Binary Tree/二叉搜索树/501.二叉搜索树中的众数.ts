/*
 * @lc app=leetcode.cn id=501 lang=typescript
 *
 * [501] 二叉搜索树中的众数
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
// 众数，就是出现频次最多的数
function findMode(root: TreeNode | null): number[] {
  let maxCount = 1
  let count = 1 // 每个元素都最少出现一次，所以count为1
  let resultArr = []
  let pre = null // 上一个元素

  // 因为是二叉搜索树，依然使用中序遍历
  let findNumber = (root: TreeNode | null) => {
    if (!root) {
      return
    }

    findNumber(root.left)
    // 当前节点和上一个值相等，次数+1
    if (root.val === pre) {
      count++
    } else {
      count = 1
    }

    // 当前元素出现最多次
    if (count > maxCount) {
      // 纪录次数
      maxCount = count
      // 同时清空结果集，结果集只保存当前节点的值
      resultArr = [root.val]
    } else if (count === maxCount) {
      // 出现次数跟最大值相等，直接追加进结果集
      resultArr.push(root.val)
    }

    // 存储当前节点的值，下一次使用
    pre = root.val

    findNumber(root.right)
  }

  findNumber(root)

  return resultArr
};
// @lc code=end

