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
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let addOne = false
  let result:ListNode = new ListNode(0)
  let cur = result
  while(l1 && l2){
    let value = l1.val+l2.val + (addOne? 1:0)

    if(value >= 10){
      value =value % 10
      addOne = true
    }else {
      addOne = false
    }

    cur.next = new ListNode(value)
    cur = cur.next

    l1 = l1.next
    l2 = l2.next
  }

  // 两个指针长度相同，都为空，直接返回
  if(!l1 && !l2){
    return result.next
  }

  // 需要拼接长的指针剩余部分
  if(l1){
    cur.next = l1
  }else {
    cur.next = l2
  }
  
  return result.next
};






addTwoNumbers(
  new ListNode(9, new ListNode(9, new ListNode(9))),
  new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
)