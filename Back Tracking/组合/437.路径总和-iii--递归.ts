/*
 * @lc app=leetcode.cn id=437 lang=typescript
 *
 * [437] 路径总和 III
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

function pathSum(root: TreeNode | null, targetSum: number): number {
  let count = 0;

  // 寻找路径
  const findPath = (root: TreeNode | null, sum: number): void => {
    if (!root) {
      return;
    }

    // 当前节点为根节点进行寻找
    findTargetByRoot(root, sum);

    // 左子节点
    findPath(root.left, sum);
    // 右子节点
    findPath(root.right, sum);
  };

  // 从给定的根节点开始寻找满足和条件的路径
  const findTargetByRoot = (root: TreeNode | null, sum): void => {
    if (!root) {
      return;
    }

    if (sum - root.val === 0) {
      count++;
    }

    // 继续以左右子节点作为根节点继续寻找
    findTargetByRoot(root.left, sum - root.val);
    findTargetByRoot(root.right, sum - root.val);
  };

  findPath(root, targetSum);
  return count;
}

// @lc code=end
