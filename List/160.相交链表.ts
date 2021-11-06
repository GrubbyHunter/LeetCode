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
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getListLen(head: ListNode | null): number {
  let len = 0, cur = head

  while (cur) {
    len++
    cur = cur.next
  }

  return len
}
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  // 由于交汇处要求节点相同，不仅是值相同
  // 这就意味着交汇处后面的所有节点都相同
  // 所交汇处到两个链表结尾的长度是一样的
  // 这里我们可以先计算两个链表的长度
  let curA = headA, curB = headB,
    lenA = getListLen(headA),
    lenB = getListLen(headB)

  if (lenA < lenB) {
    // ES6解构，这里等同于
    // A和B的值互换
    [curA, curB] = [curB, curA];
    [lenA, lenB] = [lenB, lenA];
  }
  // lenA - lenB为长度差
  let i = lenA - lenB;
  // name较长的那个链表可以先走i步，从第i不开始比较节点
  while (i-- > 0) {
    curA = curA.next || null
  }

  // 这里A和B长度一样，所以判断条件只要一个不为空即可
  // 同时由于节点的指向要求一致
  // 这里不需要比较值，直接比较两个节点是否相同即可
  while (curA && curA !== curB) {
    curA = curA.next
    curB = curB.next
  }
  return curA
}

// @lc code=end

