// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
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
function pathSum(root: TreeNode | null, targetSum: number): number {
  let count = 0;

  let middleTraversal = (tree: TreeNode | null, sum: number) => {
    if (!tree) {
      return;
    }
    let result = sum + tree.val;

    if (result === targetSum) {
      count++;
    }

    middleTraversal(tree.left, result);
    middleTraversal(tree.right, result);

    middleTraversal(tree.left, tree.val);
    middleTraversal(tree.right, tree.val);
  };

  middleTraversal(root, 0);

  return count;
}

// pathSum(
//   new TreeNode(
//     10,
//     new TreeNode(
//       5,
//       new TreeNode(3, new TreeNode(3), new TreeNode(-2)),
//       new TreeNode(2, null, new TreeNode(1))
//     ),
//     new TreeNode(-3, null, new TreeNode(11))
//   ),
//   8
// );
pathSum(new TreeNode(1, new TreeNode(2), null), 2);
// @lc code=end
