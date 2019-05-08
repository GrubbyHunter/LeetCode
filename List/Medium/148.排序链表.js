/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode-cn.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (59.26%)
 * Total Accepted:    10.7K
 * Total Submissions: 18K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
 *
 * 示例 1:
 *
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 *
 *
 * 示例 2:
 *
 * 输入: -1->5->3->4->0
 * 输出: -1->0->3->4->5
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
 * @return {ListNode}
 */
var head = { val: 1, next: { val: 3, next: { val: 3, next: { val: 1 } } } }
var sortList = function(head) {
  if (!head) {
    return null
  }

  if (!head.next) {
    return head
  }

  let tempVal = null
  let maxItem = null

  let getMax = item => {
    // 是否是最后一个元素
    if (item.next) {
      if (item.next == maxItem) {
        maxItem = item
        return item
      }

      if (item.val > item.next.val) {
        tempVal = item.val
        item.val = item.next.val
        item.next.val = tempVal
      }

      item = item.next
      return getMax(item)
    }

    maxItem = item
    return item
  }

  while (head) {
    let item = getMax(head)
    if (head.next == item) {
      return head
    }
  }
}
