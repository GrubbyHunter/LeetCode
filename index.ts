/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function isSymmetric(root: any | null): boolean {
  if (!root) {
    return false
  }

  let queue = [root.left, root.right]

  while (queue.length > 0) {
    let left = queue.shift()
    let right = queue.shift()

    if (left && right) {
      if (left.val !== right.val) {
        return false
      }
      queue.push(left.left)
      queue.push(right.right)
      queue.push(left.right)
      queue.push(right.left)
    } else if (!left && right) {
      return false
    } else if (left && !right) {
      return false
    }
  }

  return true
};

const arr = isSymmetric({
  val: 9,
  left: {
    val: -42,
    left: null,
    right: {
      val: 76,
      left: null,
      right: {
        val: 13
      }
    }
  },
  right: {
    val: -42,
    left: {
      val: 76,
      left: null,
      right: {
        val: 13
      }
    },
    right: null
  }
});

// @lc code=end

