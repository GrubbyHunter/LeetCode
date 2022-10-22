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

/**
 Do not return anything, modify head in-place instead.
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
function nextLargerNodes(head: ListNode | null): number[] {
  if (!head) {
    return []
  }

  if (!head.next) {
    return [0]
  }

  // 链表转数组，临时统计数据
  let tempList: number[] = []
  while (head) {
    tempList.push(head.val)
    head = head.next
  }

  // 记录结果
  let result: number[] = new Array(tempList.length)
  // 使用数组模拟单调栈
  let stack: number[] = []
  
  // 从右往左遍历
  for (let i = tempList.length - 1; i >= 0; i--) {
    // 移除掉单调栈中小于当前元素的数字
    // 因为单调栈是从右往左放入进去的，所以放进去的元素一定在当前元素的右边
    while(stack.length > 0 && stack[stack.length-1] <= tempList[i]){
      stack.pop()
    }
    
    // 栈中没有比当前元素大的元素，当前位置记录为0
    if(stack.length === 0){
      result[i] = 0
    }else {
      // 当前元素比栈顶元素小，记录栈顶元素为当前元素右侧第一个比他大的元素
      result[i] = stack[stack.length-1]
    }

    // 需要将当前元素推入栈顶
    stack.push(tempList[i])
  }

  return result
};







nextLargerNodes(new ListNode(2, new ListNode(7, new ListNode(4, new ListNode(3,new ListNode(5))))))