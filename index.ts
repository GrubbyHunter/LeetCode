/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function getLevel(root: any | null): number {
  let level = 0

  while (root) {
    root = root.left
    level++
  }

  return level
}

function countNodes(root: any | null): number {
  if (!root) {
    return 0
  }

  let leftLevel = getLevel(root.left)
  let rightLevel = getLevel(root.right)

  // 左右层级相等，说明最后一个节点在右树
  if (leftLevel === rightLevel) {
    // 满左树节点数量 + midle节点 + 右子树的节点 
    return (Math.pow(2, leftLevel) - 1) + 1 + countNodes(root.right)
  } else {
    // 层级不相等，则右子树的 上一层是满节点
    // 满右子树 + midle节点 + 左子树的节点数量
    return (Math.pow(2, rightLevel) - 1) + 1 + countNodes(root.left)
  }
};

const arr = countNodes({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    }
  },
  right: {
    val: 3
  }
});

// @lc code=end

