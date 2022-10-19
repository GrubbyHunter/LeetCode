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
function reorderList(head: ListNode | null): void {
  if (!head || !head.next) {
    return
  }
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  let preMid: ListNode | null = slow

  // 快慢指针，找到链表的中间点
  while (slow && fast && fast.next) {
    // 先记录中间节点的前一个节点
    preMid = slow
    slow = slow.next
    fast = fast.next.next
  }

  // 切断原有链表中间
  preMid.next = null

  // 将链表的后半部分倒序
  let pre: ListNode | null = null
  let current : ListNode | null = slow

  while (current) {
    // 临时节点，记录下一个节点
    let temp = current.next
    // 当前节点指向它的上一个节点
    current.next = pre
    // 记录上一个节点
    pre = current
    // 继续下一次遍历
    current = temp
  }

  // 将 head 和 pre 两个链表合并
  let start: ListNode | null = head

  while (start&& pre) {
    let startNext:ListNode | null = start.next
    let preNext:ListNode | null = pre.next
    
    start.next = pre

    if(!startNext){
      break
    }
    
    pre.next = startNext

    // 继续下一个
    start = startNext
    pre = preNext
  }
};








reorderList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))