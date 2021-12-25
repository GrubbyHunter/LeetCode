/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
function minCameraCover(root: TreeNode | null): number {
  let count = 0

  let findNodeLight = (node: TreeNode | null): boolean => {
    if (!node) {
      return false
    }

    if (!node.left && !node.right) {
      return false
    }

    let leftResult = findNodeLight(node.left)

    let rightResult = findNodeLight(node.right)

    if (leftResult || rightResult) {

      return false
    }

    count++
    return true
  }

  findNodeLight(root)

  return count
};

minCameraCover(new TreeNode(0, new TreeNode(0, new TreeNode(0), new TreeNode(0)), null))
// @lc code=end

