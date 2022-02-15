// @lc code=start
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxPathSum(root: TreeNode | null): number {
  let max = Number.MIN_SAFE_INTEGER;

  const endTraversal = (tree: TreeNode | null): number => {
    //base case
    if (!tree) return 0;

    //divide
    // 如果子树路径和为负则应当置0，表示最大路径不包含子树
    // dfs(root.left) 根节点 + 左子树的和
    // dfs(root.right) 根节点 + 右子树的和
    let left = Math.max(0, endTraversal(tree.left));
    let right = Math.max(0, endTraversal(tree.right));

    // 判断在该节点包含左右子树的路径和是否大于当前最大路径和
    max = Math.max(max, tree.val + left + right);

    // 返回大的那个节点作为一端 + 根节点的值，即路径和大到边
    return Math.max(left, right) + tree.val;
  };

  endTraversal(root);

  return max;
}
maxPathSum(
  new TreeNode(
    -2,
    new TreeNode(-1)
    // new TreeNode(20, new TreeNode(15), new TreeNode(7))
  )
);
// @lc code=end
