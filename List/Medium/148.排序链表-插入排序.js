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
 * @desc 排序链表，插入排序
 * 1、这里链表不同于数组，所以他的思路是标记一个lastItem，这个变量指向当前已经排序好的链表元素
 * 2、lastItem默认为null，第一次遍历之后就是最后一个元素，第二次遍历之后就是倒数第二个元素
 * 3、这里同样只是进行值交换，内部循环和外部循环都要判断当前元素是否等于lastItem
 * 4、内部判断当前元素的next是否等于lastItem，是的话则下一次遍历就到了已经排序号的最大的元素，所以要终止遍历
 * 5、外部直接判断第一个元素first是否等于lastItem，是的话则表示后面的全部都排好序了，已经遍历完成，需要终止遍历
 * @param {ListNode} head
 * @return {ListNode}
 */
var head = { val: 1, next: { val: 3, next: { val: 3, next: { val: 1 } } } }
var sortList = function(head) {
  let lastItem
  let first = head

  while (first && first != lastItem) {
    let begin = first

    while (begin.next && begin.next != lastItem) {
      // 冒泡互换位置
      if (begin.val > begin.next.val) {
        let temp = begin.val
        begin.val = begin.next.val
        begin.next.val = temp
      }

      begin = begin.next
    }

    lastItem = begin
  }

  return head
}

sortList(head)
