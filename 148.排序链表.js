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
var sortList = function(head) {
  if (!head || !head.next) {
    return head
  }
  let left = head.next
  let right = head.next
  let item = head.next
  let middle = item.val
  while (item.next) {
    while (right && right.val > middle) {
      right = right.next
    }

    item = item.next
  }
}
