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
  let fast = new ListNode(null, head)
  let slow = new ListNode(null, head)

  while (fast.next) {
    // 快慢指针每次各走一步
    slow = slow.next
    fast = fast.next

    // 这里的循环相当于快指针先走 n-1 步
    while (n > 0) {
      // 还没有到第 n-1 个节点，但是fast指针已经走完，说明n大于链表长度，
      if (!fast.next) {
        // 直接删除第一个节点
        head = head.next
        return head

      }

      fast = fast.next
      n--
    }
  }

  // 结束循环，此时slow指向倒数第n-1个节点
  // 删除slow.next即可
  slow.next = slow.next.next

  return head
};
// @lc code=end

