/*
 * @lc app=leetcode.cn id=173 lang=typescript
 *
 * [173] 二叉搜索树迭代器
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

class BSTIterator {
  queue: any[];
  constructor(root: TreeNode | null) {
    this.queue = [];

    // 中序遍历，但是先遍历右边，这样右 中 左顺序放入数组
    const inOrder = (root) => {
      if (!root) {
        return;
      }

      inOrder(root.right);
      this.queue.push(root);
      inOrder(root.left);
    };

    inOrder(root);
  }

  next(): number {
    // 数组从尾部取值，这样更快，如果从头部shift，后面每个元素位置都要移动
    const current = this.queue.pop();
    return current.val;
  }

  hasNext(): boolean {
    return this.queue.length !== 0;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end
