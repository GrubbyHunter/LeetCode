/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function hasPathSum(root: any | null, targetSum: number): boolean {
  const getSum = (sum: number, node: any | null) => {
    if (!node) {
      return -1
    }


    if (!node.left && !node.right) {
      if (node.val === sum) {
        return 0
      } else {
        return -1
      }
    }

    let result = sum - node.val

    let left = getSum(result, node.left)
    if (left === 0) {
      return 0
    }

    let right = getSum(result, node.right)
    if (right === 0) {
      return 0
    }

    return -1
  }

  return getSum(targetSum, root) === 0
};

const arr = hasPathSum({
  val: 1,
  left: {
    val: -2,
    left: {
      val: 1,
      left: {
        val: -1
      }
    },
    right: {
      val: 3
    }
  },
  right: {
    val: -3,
    left: {
      val: -2
    },
  }
}, -1);

// @lc code=end

