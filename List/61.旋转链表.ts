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

    // 走完链表
    if (!quick.next) {
      // 遍历到结尾k等于0，说明k是长度的n被，所以移动完最后不变，直接返回
      if (k === 0) {
        return head
      }

      // K还有值，那么从头开始走，相当于k等于10，length为6的话，quick走完了一个6还要走一个4
      quick = head
      // 继续下一轮循环
      continue
    }
    quick = quick.next
  }

  // 快慢指针一起走，找到倒数第k个节点为slow
  // 快慢指针一起走，快指针走到头，那么慢指针为倒数第k+1个节点
  while (quick && quick.next) {
    quick = quick.next
    slow = slow.next
  }

  // slow.next为倒数第k个节点，也就实现的开始节点
  let firstNode = slow.next
  // 切断原来slow（倒数k+1个节点）与slow.next（倒数第k个节点）的联系
  // slow为新的结尾
  slow.next = null
  // 原来的结尾指向头部，连起来
  quick.next = startNode

  return firstNode
};
// @lc code=end

