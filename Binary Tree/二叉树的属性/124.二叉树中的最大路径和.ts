/*
 * @lc app=leetcode.cn id=124 lang=typescript
 *
 * [124] 二叉树中的最大路径和
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

function maxPathSum(root: TreeNode | null): number {
  let max = Number.MIN_SAFE_INTEGER;
  // 后序遍历，先计算左右子节点的和
  const endTraversal = (tree: TreeNode | null): number => {
    //base case
    if (!tree) return 0;

    //divide
    // 如果子树路径和为负则应当置0，这段子路径不纳入最终结果
    // endTraversal(tree.left) middle节点 + 左子树的和
    // endTraversal(tree.right) middle节点 + 右子树的和
    let left = Math.max(0, endTraversal(tree.left));
    let right = Math.max(0, endTraversal(tree.right));

    // 判断在该节点包含左右子树的路径和是否大于当前最大路径和
    max = Math.max(max, tree.val + left + right);

    // 左右子节点较大的一个 + 根节点的值，即路径和大到边
    return Math.max(left, right) + tree.val;
  };

  endTraversal(root);

  return max;
}
// @lc code=end
