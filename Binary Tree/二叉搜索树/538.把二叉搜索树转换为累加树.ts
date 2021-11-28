/*
 * @lc app=leetcode.cn id=538 lang=typescript
 *
 * [538] 把二叉搜索树转换为累加树
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

function convertBST(root: TreeNode | null): TreeNode | null {
  let currentVal = 0
  // 采用后序遍历，但是是右中左的顺序
  // 这样可以从大到小依次遍历
  // 最右边最大值等于他本身
  const setNodeVal = (node: TreeNode | null): void => {
    if (!node) {
      return
    }

    setNodeVal(node.right)
    // 往小遍历，遍历过的值都大于没有遍历过的，依次累加前面的值
    node.val += currentVal
    currentVal = node.val

    setNodeVal(node.left)
  }

  setNodeVal(root)
  return root
};
// @lc code=end

