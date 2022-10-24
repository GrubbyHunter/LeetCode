/*
 * @lc app=leetcode.cn id=147 lang=typescript
 *
 * [147] 对链表进行插入排序
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

function insertionSortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head
  }

  let result = new ListNode(0, head)
  let curr = head.next
  let lastSorted = head

  while (curr) {
    if (lastSorted.val <= curr.val) {     // 说明curr应该位于lastSorted之后
      lastSorted = lastSorted.next   // 将lastSorted后移一位,curr变成新的lastSorted
    } else {                              // 否则,从链表头结点开始向后遍历链表中的节点
      let prev = result;      // 从链表头开始遍历 prev是插入节点curr位置的前一个节点
      while (prev.next.val <= curr.val) { // 循环退出的条件是找到curr应该插入的位置
        prev = prev.next;
      }
      // 以下三行是为了完成对curr的插入
      lastSorted.next = curr.next; // 这里只是先保存curr.next方便后面的赋值
      curr.next = prev.next;
      prev.next = curr;
    }
    curr = lastSorted.next // 此时 curr 为下一个待插入的元素

  }

  return result.next
};
// @lc code=end

