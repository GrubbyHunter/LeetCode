/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
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
// 针对两个两边进行合并排序
function mergeTwoLists(list1: ListNode, list2: ListNode) {
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  let head: any = null;
  // 当前头指针指向较小的节点
  if (list1.val <= list2.val) {
    head = list1;
    // 让较小节点的下一个节点继续与另一个节点比较
    head.next = mergeTwoLists(list1.next, list2);
  } else {
    head = list2;
    head.next = mergeTwoLists(list1, list2.next);
  }

  return head;
}
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) {
    return null
  }

  if (lists.length === 1) {
    return lists[0]
  }

  // list中海油两个链表时候，直接合并
  if (lists.length === 2) {
    return mergeTwoLists(lists[0], lists[1])
  }

  let mid = Math.floor(lists.length / 2)
  let list1 = lists.slice(0, mid)
  let list2 = lists.slice(mid)
  // 针对左右两半部分的列表继续拆分，一直拆到<=2个
  // 然后mergeKLists是返回拆分完合并好的数组，对最终两个进行合并即可
  return mergeTwoLists(mergeKLists(list1), mergeKLists(list2))
};
// @lc code=end

