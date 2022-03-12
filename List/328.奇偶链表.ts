/*
 * @lc app=leetcode.cn id=328 lang=typescript
 *
 * [328] 奇偶链表
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
function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head
  }

  let double: any = head.next
  let doublePointer: any = head.next

  let single: any = head
  let singlePointer = head

  // 只需要用偶数指针和他的next作为结束的判断条件
  while (double && double.next) {
    //第一个数的指针指向第三个数
    single.next = single.next.next
    // 当前指针为第三个数，将他赋值给第一个数
    single = single.next

    //第二个数的指针指向第四个数
    double.next = double.next.next
    // 当前指针为第四个数，将他赋值给第二个数
    double = double.next
  }

  // 奇数指针结尾指向偶数指针的开头
  single.next = doublePointer

  // 返回奇数指针
  return singlePointer
};
// @lc code=end

