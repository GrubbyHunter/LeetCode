/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (32.89%)
 * Total Accepted:    36.1K
 * Total Submissions: 109.9K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 *
 * 示例：
 *
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 *
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 *
 *
 * 说明：
 *
 * 给定的 n 保证是有效的。
 *
 * 进阶：
 *
 * 你能尝试使用一趟扫描实现吗？
 *
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let item = head
  let deleteItem = head

  if (n == 1) {
    while (item.next && item.next.next) {
      item = item.next
    }

    if (!item.next) {
      head = null
      return head
    }
    item.next = null
    return head
  }
  while (n > 1) {
    item = item.next
    n--
  }

  while (item.next) {
    deleteItem = deleteItem.next
    item = item.next
  }

  if (!deleteItem) {
    head = null
    return head
  }

  if (deleteItem.next) {
    deleteItem.val = deleteItem.next.val
    deleteItem.next = deleteItem.next.next
  } else {
    head = null
  }

  return head
}
