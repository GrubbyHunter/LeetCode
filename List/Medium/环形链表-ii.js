/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 *
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/description/
 *
 * algorithms
 * Medium (37.34%)
 * Total Accepted:    13.5K
 * Total Submissions: 36.1K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 *
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 *
 * 说明：不允许修改给定的链表。
 *
 *
 *
 * 示例 1：
 *
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：tail connects to node index 1
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 *
 *
 *
 *
 * 示例 2：
 *
 * 输入：head = [1,2], pos = 0
 * 输出：tail connects to node index 0
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 *
 *
 *
 *
 * 示例 3：
 *
 * 输入：head = [1], pos = -1
 * 输出：no cycle
 * 解释：链表中没有环。
 *
 *
 *
 *
 *
 *
 * 进阶：
 * 你是否可以不用额外空间解决此题？
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
 * 解法：
 * 这里先使用快慢指针判断环形链表，如果存在环的话
 * 重新使用两个指针，一个从head往下走，每次走一步，另一个从快慢指针的相遇点，也就是
 * fast或者slow点往下走，每次也走一步，因为链表起点到入环点的距离和相遇点到入环点的距离相同
 * 所以遍历head == fast的时候，就是入环点
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head || !head.next) {
    return null
  }

  let fast = head
  let slow = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow == fast) {
      break
    }
  }

  if (fast == null || fast.next == null) {
    return null
  }

  while (head != slow) {
    head = head.next
    slow = slow.next
  }

  return head
}
