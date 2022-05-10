/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let length = 1

  let temp: any = head

  if (!head || k <= 1) {
    return head
  }

  // 先统计链表长度
  while (temp.next) {
    length++
    temp = temp.next
  }

  // 需要反转的总段数
  let size = Math.floor(length / k)
  let count = 0

  let pre: any = new ListNode(0, head)
  let result: any = pre
  while (size > 0) {
    // 头插法
    let curNext: any = head.next!
    // 移除翻转的后裔个节点
    head.next = curNext!.next!
    //后一个节点移到头部，也就是pre节点后面
    curNext.next = pre.next
    // 头部接上移过来的前一个节点
    pre.next = curNext

    count++

    // 反转了K个之后开启下一轮反转
    if (count === k - 1) {
      // 段数-1
      size--
      // 重置pre和head
      pre = head
      // pre 为当前翻转的最后一个节点，head为下一个新的节点
      head = head.next!

      count = 0
    }
  }

  return result.next
};
// @lc code=end

