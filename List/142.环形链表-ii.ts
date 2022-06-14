/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return null
  }

  // 设置快慢指针
  let slow = head.next
  let fast = head.next.next

  while (fast && fast.next) {
    // 慢指针每次走1步
    slow = slow.next
    // 快指针每次走2步
    fast = fast.next.next

    // 快慢指针能相遇，表示有环，同时此时的fast为相遇点
    // 因为这里，slow每次走1步，fast每次走2步，如果有环，会有两种情况
    // 1、fast在slow后2步，下一次即和slow相遇
    // 2、fast在slow后1步，下一次走到slow前面1步，然后slow走1步，和fast相遇
    if (slow === fast) {
      // 重新从头部开始走
      slow = head
      // 起点到环入口点距离为x，入口点到相遇点距离为y,相遇点到入口点距离为z
      // 那么两个指针相遇时候，slow走了x+y，fast走了x+y+z+y
      // 而slow的速度只有fast的一半，相当于slow走了fast一半的距离
      // 2*(x+y) =x+y+z+y
      // x=z 

      while (slow !== fast) {
        // 重新设立两个指针，一个从头部开始走，走x
        // 一个从相遇点开始走，走z，因为x=z，所以相遇时候就是环的入口
        // 从头部开始走每次走一步
        slow = slow.next
        // 从相遇点开始走，每次走一步
        fast = fast.next
      }

      return slow
    }
  }
  return null
};
// @lc code=end

