/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * [143] 重排链表
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  if (!head || !head.next) {
    return
  }
  let slow = head
  let fast = head
  let preMid = slow
  // 快慢指针，找到链表的中间点
  while (fast && fast.next) {
    // 先记录中间节点的前一个节点
    preMid = slow
    slow = slow.next
    fast = fast.next.next
  }

  // 切断原有链表中间
  preMid.next = null

  // 将链表的后半部分倒序
  
  let pre = new ListNode(-1,slow)
  let halfList = pre
  while(slow && slow.next){
    
  }

};
// @lc code=end

