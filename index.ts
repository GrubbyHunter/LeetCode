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
function pruneTree(root: TreeNode | null): TreeNode | null {
  // 后序遍历
  let bfs = (root: TreeNode | null): boolean => {
    if (!root) {
      return true;
    }

    let isLeftZero = bfs(root.left);
    let isRightZero = bfs(root.right);

    if (isLeftZero) {
      root.left = null;
    }
    if (isRightZero) {
      root.right = null;
    }

    let bool = isLeftZero && isRightZero && root.val === 0;

    if (bool) {
      root = null;
    }

    return bool;
  };

  bfs(root);

  return root;
}
pruneTree(new TreeNode(0, null, new TreeNode(0)));
