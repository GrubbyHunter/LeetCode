/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let addOne = false
  let result: ListNode = new ListNode(0)
  let cur = result

  while (l1 || l2) {
    let value = (l1?.val || 0) + (l2?.val || 0) + (addOne ? 1 : 0)

    if (value >= 10) {
      value = value % 10
      addOne = true
    } else {
      addOne = false
    }

    cur.next = new ListNode(value)
    cur = cur.next

    l1 = l1?.next || null
    l2 = l2?.next || null
  }
  // 最有一个和为10，需要补一个1
  if(addOne){
    cur.next = new ListNode(1)
  }

  return result.next
};
// @lc code=end

