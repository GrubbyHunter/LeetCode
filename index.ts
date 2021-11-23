/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function isValidBST(root: any | null): boolean {
  // 中序遍历，将二叉搜索树转换为数组
  const array: any = []
  const getArray = (root) => {
    if (!root) {
      return
    }
    // 使用中序遍历是为了符合二叉搜索树的特性
    // 遍历完他就是一个升序数组
    getArray(root.left)
    array.push(root.val)
    getArray(root.right)
  }

  // 如果不是升序数组，则不是二叉搜索树
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= array[i - 1]) {
      return false
    }
  }

  return true
};
const arr = isValidBST({
  val: 5,
  left: { val: 1 },
  right: { val: 4 }
})

// @lc code=end

