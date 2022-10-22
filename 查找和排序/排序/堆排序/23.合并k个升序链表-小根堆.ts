/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const undefinedVal = Number.MIN_SAFE_INTEGER

  if (!lists || lists.length === 0) {
    return null
  }
  // 小根堆数组
  let heap: Array<ListNode | null> = []

  // 往小根堆插入一个新元素
  function insertHeap(node: ListNode | null) {
    if(!node){
      return
    }
    // 放堆尾
    heap.push(node)
    // 插入位置，也就是尾部
    let i = heap.length - 1
    // 父节点位置
    let parentIndex = Math.floor((i - 1) / 2)

    while (parentIndex >= 0 && heap[i].val < heap[parentIndex].val) {
      // 当前节点与父节点互换位置
      [heap[i], heap[parentIndex]] = [heap[parentIndex], heap[i]]
      // 当前节点为父节点下标
      i = parentIndex
      // 父节点下标为更上一层父节点的下标
      parentIndex = Math.floor((i - 1) / 2)
    }
  }

  // 从小根堆删除堆顶元素，最小元素
  function deleteFromHeap() {
    if (heap.length === 0) {
      return
    }

    // 这里，数组的第一个元素和最后一个元素互换，然后删除最后一个元素
    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]]
    // 实际上就是删除第一个元素，然后把最后一个元素移到头部，与他的左右比较，重新进行堆排序
    // 这里改成删除尾部元素是为了让数组少移动，因为直接删除第一个元素，会动到整个数组
    heap.pop()

    let index = 0
    // 这里0会转化为false，实际上是有效的值，所以不能直接 heap[0]?.val  || undefinedVal
    // 需要判断其值的类型
    let indexVal: number = typeof heap[0]?.val  === "number" ?  heap[0]?.val : undefinedVal
    let childVal

    do {
      let leftIndex = index * 2 + 1, rightIndex = index * 2 + 2
      
      let leftVal = typeof heap[leftIndex]?.val === "number" ? heap[leftIndex]?.val  : undefinedVal,
        rightVal =  typeof heap[rightIndex]?.val === "number"? heap[rightIndex]?.val : undefinedVal

      // 没有左右子节点了，已经到最小堆底部了，跳出循环
      if (leftVal === undefinedVal && rightVal === undefinedVal) {
        break
      }

      let currnetIndex = index
      if (leftVal === undefinedVal && rightVal !== undefinedVal) {
        childVal = rightVal
        index = rightIndex
      } else if (leftVal !== undefinedVal && rightVal === undefinedVal) {
        // 右节点不存在
        childVal = leftVal
        index = leftIndex
      } else {
        // 两个节点都存在，跟小的那个节点比较
        if (leftVal < rightVal) {
          childVal = leftVal
          // 找到正确的位置，跳出循环
          index = leftIndex
        } else {
          childVal = rightVal
          index = rightIndex
        }
      }

      if (indexVal >= childVal) {
        [heap[index], heap[currnetIndex]] = [heap[currnetIndex], heap[index]]
      }


    } while (indexVal > childVal)
  }

  // 初始化小根堆，每个链表头部元素放入小根堆
  for (let i = 0; i < lists.length; i++) {
    if(lists[i] && typeof lists[i]?.val  === "number"){
      insertHeap(lists[i])
    }
  }

  let result = new ListNode(0)
  let pre = result
  // 遍历小根堆
  while (heap.length > 0) {
    let minNode = heap[0]
    // 堆顶元素为最小元素，直接取出赋值
    if(!minNode) {
      break
    }

    pre.next = minNode

    // 删除堆顶元素
    deleteFromHeap()
    // 将链表的下一个元素继续插入放入小根堆，进行排序
    if (minNode.next) {
      insertHeap(minNode.next)
    }

    pre = pre.next
  }

  return result.next
};
// @lc code=end

