/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || k === 0) {
    return head
  }

  let startNode = head
  let quick = head
  let slow = head

  // 快指针先走 k 步
  while (k > 0) {
    k--

    // 还没走到k步已经走到结尾，说明k大于链表长度
    if (!quick.next) {
      // 遍历到结尾k等于0，说明k是长度的n被，所以移动完最后不变，直接返回
      if (k === 0) {
        return head
      }
      // quick回到头部位置
      quick = head
      continue
    }

    quick = quick.next
  }


  // 快慢指针一起走，找到倒数第k个节点为slow
  while (quick && quick.next) {
    quick = quick.next
    slow = slow.next
  }

  // slow为倒数k+1个元素，slow为倒数第k个元素，他作为新的起点元素
  let firstNode = slow.next

  // 将倒数第k-1个元素的next清空，让它变成最后一个元素
  slow.next = null
  // quick为原始链表的结尾，然他跟原始链表的头部连起来
  quick.next = startNode

  return firstNode
};
// @lc code=end

