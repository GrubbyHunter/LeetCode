/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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
// 此题需要用到快慢指针
// 快指针先走n-1步，然后慢指针和快指针每次走一步
// 快指针到结尾，慢指针到了倒数n-1个节点，删除慢指针的next即可·
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast = head
  let slow = head

  // 快指针先走n步
  while (n > 0) {
    // n依然大于0，但是已经走到了结尾，说明n大于链表长度
    if (!fast.next) {
      // 直接删除第一个节点
      head = head.next
      return head
    }

    fast = fast.next
    n--
  }


  // 一起走，每次走一步，fast走到结尾时候，slow的next就是倒数第n个节点
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  // 结束循环，此时slow指向倒数第n-1个节点
  // 删除slow.next即可
  slow.next = slow.next.next

  return head
};
// @lc code=end

