/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var head = { val: 4, next: { val: 1, next: { val: 2, next: { val: 3 } } } }
var sortList = function(head) {
  let quickSort = (head, endHead) => {
    if (head == endHead || !head) {
      return head
    }

    let slowNext = head
    let quickNext = head.next

    let middle = head.val
    while (quickNext != endHead && quickNext) {
      // 快指针找到比基准小的树
      if (quickNext.val <= middle) {
        slowNext = slowNext.next
        // 只进行值互换，因为快指针已经走过一次，所以慢指针指向的值肯定是大于基准的值，直接进行互换
        if (quickNext.val != slowNext.val) {
          let temp = slowNext.val
          slowNext.val = quickNext.val
          quickNext.val = temp
        }
      }

      quickNext = quickNext.next
    }

    let temp = slowNext.val
    slowNext.val = middle
    head.val = temp

    quickSort(head, slowNext)
    quickSort(slowNext ? slowNext.next : null, null)
  }

  quickSort(head, null)

  return head
}
