# 回文链表

> https://leetcode-cn.com/problems/palindrome-linked-list/description/

> 请判断一个链表是否为回文链表。即正反都是一样的链表  
> 示例 1:  
> 输入: 1->2  
> 输出: false

> 示例 2:  
> 输入: 1->2->2->1  
> 输出: true

## 解法一

> 采用数组记录链表的每个值，然后从头到尾比较数组中每个值否相等，时间复杂度为 O(n)

```javascript
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let list = []
  let temp = head
  while (temp) {
    list.push(temp.val)
    temp = temp.next
  }

  let left = 0,
    right = list.length - 1
  while (left < right) {
    if (list[left] != list[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
```
