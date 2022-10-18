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
  if(!head || !head.next){
    return head
  }

  // 用来最终记录结果
  let result: ListNode | null = new ListNode(-1,head)
  // 用来记录上一个节点，方便进行删除操作
  let pre: ListNode | null = result
  // 用来遍历
  let current: ListNode | null = head

  while(current && current.next){
    // 重复节点
    if(current.val === current.next.val){
      // 找到后面与当前节点不相等的第一个元素
      while(current.next && current.val === current.next.val){
        current = current.next
      }
      // 当前current也是重复节点，需要删除
      pre.next = current.next
      current = current.next
    }else {
      // 非重复节点，直接记录上一个节点
      pre = current
      // 继续遍历
      current = current.next
    }
  }

  return result.next
};
// @lc code=end

