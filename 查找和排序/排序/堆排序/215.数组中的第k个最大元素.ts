/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  let minHeap = new Array()

  // 往堆中插入一个新元素
  const insertToHeap = (num: number): void => {
    // push到堆数组尾部
    minHeap.push(num)
    // 当前加入元素的下标
    let index = minHeap.length - 1
    // 父节点在堆数组中的下标
    let parentIndex = Math.floor((index - 1) / 2)

    // parentIndex < 0，说明堆中只有一个元素，直接返回
    // 下雨他的父节点，需要与父节点交换
    while (parentIndex >= 0 && minHeap[index] < minHeap[parentIndex]) {
      // exchange
      [minHeap[index], minHeap[parentIndex]] = [minHeap[parentIndex], minHeap[index]]

      // 重新设置当前元素的下标
      index = parentIndex
      // 重新获取他的父节点
      parentIndex = Math.floor((index - 1) / 2)
    }
  }

  const buildMinHeap = (num: number): void => {
    // 先将堆顶元素设置为新的数值，相当于删除原来的最小值，然后设置新的
    minHeap[0] = num
    let length = minHeap.length
    let index = 0

    while (index < length) {
      // 左右子节点在堆中下标
      let leftChildIndex = Math.floor(2 * index + 1)
      let rightChildIndex = Math.floor(2 * index + 2)

      // 左右子节点都为空，直接返回
      if (leftChildIndex >= length && rightChildIndex >= length) {
        return
      }

      // 只有左子节点
      if (rightChildIndex >= length) {
        if (minHeap[index] > minHeap[leftChildIndex]) {
          // 互换
          [minHeap[index], minHeap[leftChildIndex]] = [minHeap[leftChildIndex], minHeap[index]]
          return
        }
      }

      // 左右节点都存在
      if (minHeap[leftChildIndex] > minHeap[rightChildIndex]) {
        // 比较小的子节点还小，找到正确位置
        if (minHeap[index] < minHeap[rightChildIndex]) {
          return
        }
        // 比右子节点大
        [minHeap[index], minHeap[rightChildIndex]] = [minHeap[rightChildIndex], minHeap[index]]
        // 设置当前节点转换完后新的下标
        index = rightChildIndex
      } else {
        // 比较小的子节点还小，找到正确位置
        if (minHeap[index] < minHeap[leftChildIndex]) {
          return
        }
        // 比右子节点大
        [minHeap[index], minHeap[leftChildIndex]] = [minHeap[leftChildIndex], minHeap[index]]
        // 设置当前节点转换完后新的下标
        index = leftChildIndex
      }
    }
  }

  let index = 0
  // 前K个元素构建最小堆
  for (; index < k; index++) {
    insertToHeap(nums[index])
  }

  // 后面k到结尾的元素遍历
  for (; index < nums.length; index++) {
    // 当前元素比堆顶元素大
    if (nums[index] > minHeap[0]) {
      // 先插入进去，重新构建堆
      buildMinHeap(nums[index])
    }
  }


  return minHeap[0]
};
// @lc code=end

