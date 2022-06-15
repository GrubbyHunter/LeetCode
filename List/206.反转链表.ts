/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head
  }

  // pre记录上一个节点，所以，这里以null开始
  let pre = null
  let current = head
  let firstNode = null

  while (current && current.next) {
    // 新建一个节点作为当前的头结
    firstNode = new ListNode(current.val, pre)
    // 头节点（也就是当前节点）作为下一次遍历的pre节点
    pre = firstNode
    // 继续下一次遍历
    current = current.next
  }

  // 遍历到最后一个节点跳出循环，手动赋值最后一个节点到表头
  head = new ListNode(current.val, firstNode)

  return head
};
// @lc code=end

