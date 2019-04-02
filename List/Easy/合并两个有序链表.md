# 合并两个有序链表

> https://leetcode-cn.com/problems/merge-two-sorted-lists/description/

> 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。  
> 示例：  
> 输入：1->2->4, 1->3->4  
> 输出：1->1->2->3->4->4

## 解法

> 创建一个新链表头指针，然后依次比较两个链表，从大到小依次放入节点，复杂度为 O(n)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let head = {}
  let temp = { next: false }

  if (!l1 && !l2) {
    return null
  }
  if (!l1 || !l2) {
    return l1 || l2
  }

  while (l1 && l2) {
    if (!temp.next) {
      head = temp
    }
    if (l1.val <= l2.val) {
      temp.next = l1
      l1 = l1.next
    } else {
      temp.next = l2
      l2 = l2.next
    }

    temp = temp.next
    if (!l1) {
      temp.next = l2
    }

    if (!l2) {
      temp.next = l1
    }
  }
  return head.next
}
```
