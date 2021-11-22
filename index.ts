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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0) {
    return null
  }
  // 遍历完成
  if (inorder.length === 1) {
    return new TreeNode(inorder[0])
  }

  // 后序遍历的最后一个元素为顶部节点
  let middle = postorder.pop()
  let left = null
  let i = 0

  for (; i < inorder.length - 1; i++) {
    if (inorder[i + 1] === middle) {
      left = inorder[i]
      break
    }
  }

  // 去掉midele和left节点
  inorder.splice(i, 2)
  // 去掉left节点
  for (i = 0; i < postorder.length; i++) {
    if (postorder[i] === left) {
      break
    }
  }
  postorder.splice(i, 1)

  let leftNode = left ? new TreeNode(left) : null
  return new TreeNode(middle, leftNode, buildTree(inorder, postorder))
};

const arr = buildTree([2, 1], [2, 1])

// @lc code=end

