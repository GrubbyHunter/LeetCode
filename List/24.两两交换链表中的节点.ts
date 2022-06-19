/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head
  }

  let result = new ListNode(null, head)
  let temp = result

  while (temp.next && temp.next.next) {
    // 由于设置了temp，虚拟头结点，所以temp.next为第1个节点，temp为per上一个节点
    let first = temp.next
    let second = first.next
    let third = second.next

    // 虚拟指针指向第二个节点
    temp.next = second
    // 第二个节点指向第一个节点
    second.next = first
    // 第一个节点指向第三个节点
    first.next = third

    // 重置虚拟指针为第二个节点
    temp = first
  }

  return result.next
};
// @lc code=end

