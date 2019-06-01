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
 * @desc 核心思路生成两个指针，一个是慢指针，初始值是head，另一个快指针，初始值是head.next
 * 1、以链表第一个元素为基准，快指针往前遍历，如果碰到比基准小的元素，将快指针指向节点的值与慢指针指向节点的值互换
 * 2、由于快指针已经走过了一遍，所以慢指针指向的值一定是比基准大的值，这样就可以将比基准大的值和比基准小的值互换位置
 * 3、在互换之前需要慢指针往前走一步，因为慢指针当前指向的值是上一次换过来的比基准小的值，所以需要往前走一步，走向比基准大的值
 * 4、互换之后，快指针需要往前走一步，因为当前快指针指向的是已经换过来的比基准小的值
 * 5、一次遍历完成之后，慢指针指向的位置即为分割值，左边是比基准小的，右边是比基准大的，这时候需要将之前的基准值换到慢指针指向的位置
 * 6、完成之后就将链表分成了比基准小和比基准大的两部分，这两部分再次递归重复进行上述操作，知道只剩下一个元素
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
        // 因为只是值互换，如果值一样，就没必要进行互换，算是一种优化
        if (quickNext.val != slowNext.val) {
          // 只进行值互换，因为快指针已经走过一次，所以慢指针指向的值肯定是大于基准的值，直接进行互换
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
