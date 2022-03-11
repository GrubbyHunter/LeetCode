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
function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) {
    return head
  }

  let double: any = head.next ? head.next.next : null
  let single: any = head.next
  let start: any = head.next

  while (start.next) {
    let temp: any = start.next
    start.next = start.next.next
    start = start.next

    temp.next = temp.next ? temp.next.next : null
  }

  start.next = double
  head.next = single

  return head
};
oddEvenList(new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))))