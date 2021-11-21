/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
const result: any = []
function getPath(str: string, root: any | null): void {
  if (!root) {
    return
  }

  if (!str) {
    str = root.val + ""
  } else {
    str += "->" + root.val
  }

  // 到达根节点，push进结果
  if (!root.left && !root.right) {
    result.push(str)
    return
  }

  getPath(str, root.left)
  getPath(str, root.right)
}

function binaryTreePaths(root: any | null): string[] {
  getPath("", root)
  return result
};

const arr = binaryTreePaths({
  val: 1
});

// @lc code=end

