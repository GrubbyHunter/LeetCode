/*
 * @lc app=leetcode.cn id=814 lang=typescript
 *
 * [814] 二叉树剪枝
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

function pruneTree(root: TreeNode | null): TreeNode | null {
  // 后序遍历，因为先要拿到两个子树的判断结果
  let bfs = (root) => {
    if (!root) {
      return true;
    }

    // 左子节点满足0子树
    let isLeftZero = bfs(root.left);
    // 右边节点满足0子树
    let isRightZero = bfs(root.right);

    if (isLeftZero) {
      root.left = null;
    }
    if (isRightZero) {
      root.right = null;
    }

    // 左右都满足，同事本身val为0，那么当前也是0子树
    return isLeftZero && isRightZero && root.val === 0;
  };

  // 根节点也是符合条件，直接返回空
  if (bfs(root)) {
    return null;
  }

  return root;
}
// @lc code=end
