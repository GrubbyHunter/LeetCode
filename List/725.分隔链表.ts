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

  let sizeArr: number[] = [];
  // 链表长度
  if (length <= k) {
    // 长度为k的数组，每个元素为1
    sizeArr = new Array(k).fill(1);
  } else {
    // 每段的长度为Math.floor(length / k)
    sizeArr = new Array(k).fill(Math.floor(length / k));
    // 前 frontSize 段长度为 Math.floor(length / k) + 1
    let frontSize = length % k;
    for (let i = 0; i < frontSize; i++) {
      sizeArr[i]++;
    }
  }

  // 需要先设置数组元素，因为不足数组长度的用null补充
  let result: any = new Array(k).fill(null);
  let pre = null;
  let index = 0;

  while (head) {
    let size: number = sizeArr.shift() || 0;
    // 不用push，设置对应数组下标链表的头指针
    result[index] = head;

    // 处理当前链表需要分割的元素个数
    for (let i = 0; i < size; i++) {
      // 这里的pre指针很重要，用来分割完之后与原来的链表切断
      pre = head;

      // 记录切断位置之后再遍历下一个位置，顺序不能反，否则外层的while循环，head无法继续遍历
      if (head) {
        head = head.next;
      }
    }

    // 切断链表
    if (pre) {
      pre.next = null;
    }
    // 下标 + 1
    index++;
  }

  return result;
}
// @lc code=end
