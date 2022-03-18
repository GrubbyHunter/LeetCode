// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  let startNode = head.next
  let quick = head
  let slow = head

  if (!head || !head.next) {
    return null
  }

  // 快指针先走 k 步
  while (k > 0) {
    // 还没走到k步已经走到结尾，说明k大于链表长度，直接返回原始链表
    if (!quick || !quick.next) {
      return head
    }
    quick = quick.next
    k--
  }

  // 快慢指针一起走，找到倒数第k个节点为slow
  while (slow && slow.next && quick && quick.next) {
    quick = quick.next
    slow = slow.next
  }

  // slow为倒数k+1个元素，slow为倒数第k个元素，他作为新的起点元素
  let firstNode = slow.next

  // 将倒数第k-1个元素的next清空，让它变成最后一个元素
  slow.next = null
  // quick为原始链表的结尾，然他跟原始链表的头部连起来
  quick.next = startNode

  head.next = firstNode
  return head
};

rotateRight(new ListNode(
  null, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
), 2)