/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let curA = headA, curB = headB
  // 两个两边都走了A+B的长度
  while (curA !== curB) {
    // 这里A链表走完了，就跳到B链表上走
    curA = curA ? curA.next : headB
    curB = curB ? curB.next : headA
  }
  return curA
}


getIntersectionNode(
  new ListNode(4, new ListNode(1, new ListNode(8, new ListNode(4, new ListNode(5, null)))))
  , new ListNode(5, new ListNode(0, new ListNode(1, new ListNode(8, new ListNode(4, new ListNode(5, null))))))
)
// @lc code=end

