/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  // 已经是最后一个节点，直接返回
  if (!head || !head.next) {
    return head
  }

  // 第一个·节点和第二个节点
  let next: ListNode | null = head.next

  // 头部节点已经是重复节点，那么头部不能要了
  if (next.val === head.val) {
    // 找到第一个不等于头部值得节点
    while (next && head.val === next.val) {
      next = next.next
    }
    // 这里是直接赋值，表示抛弃掉重复的头部节点
    head = deleteDuplicates(next)
  } else {
    // head可用，继续寻找下一个可用的
    head.next = deleteDuplicates(next)
  }

  return head
};
// @lc code=end

