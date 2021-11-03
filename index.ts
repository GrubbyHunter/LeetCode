/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head
  }

  let pre = null
  let current = head

  while (current.next) {
    // 新建一个节点作为当前的头结点
    head = new ListNode(current.val, pre)
    // 头节点（也就是当前节点）作为下一次遍历的pre节点
    pre = head
    // 继续下一次遍历
    current = current.next
  }

  let firstNode = head
  head = new ListNode(current.val, firstNode)

  return head
};
reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))))
// @lc code=end

