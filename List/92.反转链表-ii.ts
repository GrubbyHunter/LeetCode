/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  let result = new ListNode()
  result.next = head
  let pre = result

  for (let i = 1; i < left; i++) {
    pre = pre.next
  }
  // 找到节点的开始位置
  head = pre.next

  for (let i = left; i < right; i++) {
    // 临时记录当前节点的·下一个节点
    let temp = head.next
    // 当前节点的下一个节点指向下下个节点
    head.next = temp.next
    // 当前节点的下个节点的下一个节点指向前置节点的下一个节点
    temp.next = pre.next;
    // 前置节点的next指向当前节点的·下一个节点
    // 相当于把下一个节点移动到开始反转位置的头部
    pre.next = temp
  }

  return result.next
};
// @lc code=end

