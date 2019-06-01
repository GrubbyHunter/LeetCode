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
 * @desc 排序链表，归并排序

 * @param {ListNode} head
 * @return {ListNode}
 */
var head = { val: 4, next: { val: 2, next: { val: 1, next: { val: 3 } } } }

var sortList = function(head) {
  let slow = head
  let quick = head
  debugger
  if (!head || !head.next) {
    return head
  }

  // 使用快慢指针将链表分成两个子链表
  while (quick) {
    slow = slow.next
    quick = quick.next ? quick.next.next : quick.next
  }

  // 表示只剩下两个元素，直接交换链表的val，然后直接返回
  if (!slow.next) {
    if (slow.val < head.val) {
      let temp = slow.val
      slow.val = head.val
      head.val = temp
    }
    return head
  }

  // 找到middle点之后，需要将他的next值清空
  // 这样就分成了两个链表

  let right = slow.next
  slow.next = null
  // 合并两个有序链表
  let mergeList = (list1, list2) => {
    let list = {}
    let tempList = { next: null }

    if (!list1 || !list2) {
      return list1 || list2
    }

    while (list1 && list2) {
      // list保留最初临时链表的引用，即临时链表的head
      if (!tempList.next) {
        list = tempList
      }

      if (list1.val > list2.val) {
        tempList.next = list2
        list2 = list2.next
      } else {
        tempList.next = list1
        list1 = list1.next
      }

      tempList = tempList.next

      if (!list1) {
        tempList.next = list2
      }

      if (!list2) {
        tempList.next = list1
      }
    }

    return list
  }

  let leftList = sortList(head)
  let rightList = sortList(right)

  return mergeList(leftList, rightList)
}
sortList(head)
