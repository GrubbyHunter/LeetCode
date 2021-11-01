/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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
// class ListNode {
//   val: number
//   next: ListNode | null
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
//   }
// }

function removeElements(head: ListNode | null, val: number): ListNode | null {
  // 初始化一个空节点指向头指针，以便循环条件 currnet.next 能够顺利进行
  const result = new ListNode(0, head)
  let current = result

  while (current.next) {
    // 找到需要删除的元素
    if (current.next.val === val) {
      //当前元素的指针指向当前元素的下一个元素的指针
      // 这样就把当前元素的下一个元素(current.next)从链表中剔除了
      current.next = current.next.next
      continue
    }
    // 正常的获取下一个元素进行遍历
    current = current.next
  }

  return result.next
};
// @lc code=end

