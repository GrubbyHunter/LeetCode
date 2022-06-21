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
    // 使用ES6解构互换，保证A为较长的链表
    [curA, curB] = [curB, curA];
    [lenA, lenB] = [lenB, lenA];
  }

  let len = lenA - lenB
  // 由于A比B长，A先走两个长度的差的步数
  while (len > 0) {
    curA = curA.next
    len--
  }

  // 此时两者一样长，直接比较节点一样即可返回
  while (curA !== curB && curA) {
    curA = curA.next
    curB = curB.next
  }
  return curA
}

// @lc code=end

