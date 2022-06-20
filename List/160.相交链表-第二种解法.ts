/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
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
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let curA = headA, curB = headB
  // 由于交汇处要求节点相同，不仅是值相同
  // 这就意味着交汇处后面的所有节点都相同
  // 所交汇处到两个链表结尾的长度是一样的
  // 所以我们让两个链表都走了A+B的长度
  // 例如A=5123,B=423
  // A走了5123423
  // B走了4235123，到了倒数第二个元素肯定会相交
  // 当然最后如果不相交，走完了最终是null === null，也会跳出循环
  // 这里由于是节点比较，直接比较两个节点，不用比对值就可以了
  while (curA !== curB) {
    // 这里A链表走完了，就跳到B链表上走
    curA = curA ? curA.next : headB

    curB = curB ? curB.next : headA
  }
  // 随便返回哪一个都行
  return curA
}

// @lc code=end

