# 反转链表

> https://leetcode-cn.com/problems/reverse-linked-list/description/

> 反转一个单链表。  
> 示例:  
> 输入: 1->2->3->4->5->NULL  
> 输出: 5->4->3->2->1->NULL

## 解法 1

> 使用遍历实现，这里首先使用临时变量存放当前节点，然后用`newHead`存放上一个节点，这里将当前节点的`next`指向`newHead`，相当于反转节点  
> 反转完之后将`newHead`重新设置为当前节点进入下一次遍历，最终完成反转，同时`newHead`指向的是最后一个节点，也就是新的头结点，复杂度为 O(n)

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
 * @return {ListNode}
 */
var reverseList = function(head) {
  let temp = null
  let newHead = null

  while (head != null) {
    temp = head
    head = head.next
    temp.next = newHead

    newHead = temp
  }

  return newHead
}
```

## 解法 2

> 使用递归实现实现，原理同遍历一样，复杂度为 O(n)

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let temp = null
  let newHead = null
  let reverse = head => {
    if (!head) {
      return newHead
    }
    temp = head
    head = head.next
    temp.next = newHead

    newHead = temp
    return reverse(head)
  }

  return reverse(head)
}
```
