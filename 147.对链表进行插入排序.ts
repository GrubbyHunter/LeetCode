/*
 * @lc app=leetcode.cn id=147 lang=typescript
 *
 * [147] 对链表进行插入排序
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

function insertionSortList(head: ListNode | null): ListNode | null {
  if(!head || !head.next){
    return head
  }

  let result = new ListNode(0, head)
  let current = result.next

  while(current){
    let val = current.val
    let start = result.next
    let pre = new ListNode(0)
    let next = current.next
    
    while(start) {
      pre = start

      if(start.val < val){
        start = start.next
      }else {
        pre.next = current
        current.next = start
        break
      }
    }

    current = next
  }

  return result
};
// @lc code=end

