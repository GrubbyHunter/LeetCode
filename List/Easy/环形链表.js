# 环形链表

> https://leetcode-cn.com/problems/linked-list-cycle/description/

> 给定一个链表，判断链表中是否有环。  
> 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

> 示例 1：  
> 输入：head = [3,2,0,-4], pos = 1  
> 输出：true  
> 解释：链表中有一个环，其尾部连接到第二个节点。

> 示例  2：  
> 输入：head = [1,2], pos = 0  
> 输出：true  
> 解释：链表中有一个环，其尾部连接到第一个节点。

> 示例 3：  
> 输入：head = [1], pos = -1  
> 输出：false  
> 解释：链表中没有环。

## 解法

> 这里使用快慢指针的方式，快指针每次走两步，慢指针每次走一步，如果有环的话，快指针走到最后然后会进入环节点，然后从后面追上慢指针，某一个时刻快指针和慢指针指向的节点相等，这时候则表明存在环。  
> 这里如果不存在环，快指针的`next`或者`next.next`会为 null，直接跳出循环，返回`false`  
> 这里无论是奇数长度的链表还是偶数长度的链表都能这么做，只不过奇数长度的链表可能会在环内多走一圈才能与慢指针的节点一致

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
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) {
    return false
  }

  let fast = head
  let slow = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow == fast) {
      return true
    }
  }

  return false
}
```
