# 删除链表的倒数第 N 个节点

> https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/

> 给定一个链表，删除链表的倒数第  n  个节点，并且返回链表的头结点。  
> 示例：  
> 给定一个链表: 1->2->3->4->5, 和 n = 2.  
> 当删除了倒数第二个节点后，链表变为 1->2->3->5.  
> 说明：  
> 给定的 n  保证是有效的。

## 解法

> 因为单链表只能朝着往后一个方向检索，所有寻找倒数第几个这种条件直接遍历的话不是很好实现  
> 这里使用快慢指针算法，比如倒数第三个节点，那么两个节点同时遍历，一个从头开始遍历，一个从第二个开始遍历，从第二个开始遍历的到了尾部的时候，这个从头开始遍历的正好是倒数第三个节点。  
> 复杂度为 O(n)

```javascript
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
```
