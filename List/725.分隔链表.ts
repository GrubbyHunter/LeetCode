/*
 * @lc app=leetcode.cn id=725 lang=typescript
 *
 * [725] 分隔链表
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
function splitListToParts(
  head: ListNode | null,
  k: number
): Array<ListNode | null> {
  let length = 0;
  let temp: any = head;

  // 统计链表长度
  while (temp) {
    temp = temp.next;
    length++;
  }

  let sizeArr: number[] = new Array(k).fill(1)
  // 链表长度小于k，每部分长度为1
  if (length <= k) {
    // 这句可以不写，为了方便理解逻辑还是写上
    sizeArr = new Array(k).fill(1)
  } else {
    // 链表长度大于k，分割的数组长度为count
    let count = Math.floor(length / k)
    // 分成k段，每段放count个
    sizeArr = new Array(k).fill(count)
    // 先数组每段放count个元素，剩余length - k * count 个元素

    let preSize = length - k * count
    // 剩余元素，前面的每段加一个
    for (let i = 0; i < preSize; i++) {
      sizeArr[i]++
    }
  }

  let result = new Array(k).fill(null)
  let pre = head
  let index = 0

  while (head) {
    // index为当前段下标，sizeArr[index]为当前段链表长度
    // 不用push 直接赋值
    result[index] = head


    for (let i = 0; i < sizeArr[index]; i++) {
      // 记录当前遍历到的位置，遍历两次，pre就是第二个元素
      // 所以pre实际上是当前段的结尾元素
      pre = head

      if (head) {
        head = head.next
      }
    }

    if (pre) {
      // pre指针为当前段最后一个节点，需要切除与后面的关联
      pre.next = null
    }

    // 遍历完一段，下标加 +1
    index++
  }

  return result;
}
// @lc code=end
