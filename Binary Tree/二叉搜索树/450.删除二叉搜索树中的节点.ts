/*
 * @lc app=leetcode.cn id=450 lang=typescript
 *
 * [450] 删除二叉搜索树中的节点
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  const findDeleteNode = (node: TreeNode | null): TreeNode | null => {
    if (!node) {
      return null
    }

    if (node.val > key) {
      // 删除节点在左边，上出完后返回新的左子树
      node.left = findDeleteNode(node.left)
    } else if (node.val < key) {
      // 删除节点在右边，上出完后返回新的右子树
      node.right = findDeleteNode(node.right)
    } else {
      // 找到了需要删除的节点
      if (!node.left && !node.right) {
        // 没有左右子节点，直接删除
        node = null
      } else if (node.left && !node.right) {
        // 只有左子节点
        // 左子节点替换为当前节点
        node = node.left
      } else if (!node.left && node.right) {
        // 只有右子节点
        // 右子节点替换为当前节点
        node = node.right
      } else {
        // 左右子节点都不为空
        let leftChild = node.left
        let rightChild = node.right

        // 找到右子树的最左边子节点
        while (rightChild.left) {
          rightChild = rightChild.left
        }

        //把左子树挂到右子树的最左子节点的左边
        rightChild.left = leftChild

        // 右子树替换需要删除的节点
        node = node.right
      }
    }
    // 返回删除完成新的子树
    return node
  }

  root = findDeleteNode(root)

  return root
};
// @lc code=end

