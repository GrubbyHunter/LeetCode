/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
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

function partition(head: ListNode | null, x: number): ListNode | null {
  let dummyHead1 = new ListNode(0);
  let dummyHead2 = new ListNode(0);
  let node1 = dummyHead1;
  let node2 = dummyHead2;

  while(head){
    // 先保存一份，以免清空两个链表尾指针时候head.next变为null了
    let headNext= head.next

    // 小于x，放第1个链表
    if(head.val < x){
      node1.next = head
      node1 = node1.next
      node1.next = null
    }else {
      // 大于等于x，放第2个链表
      node2.next = head
      node2 = node2.next
      node2.next = null
    }
    
    head = headNext
  }

  // 第一个链表尾部指向第二个链表头部，进行链接
  node1.next = dummyHead2.next
  // 返回第一个链表头部
  return dummyHead1.next
};
// @lc code=end

