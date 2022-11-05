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

/**
 Do not return anything, modify head in-place instead.
 */
// 快速排序
const quickSort = (list: number[], left: number, right: number): void => {
  if (left >= right) {
    return;
  }

  let start = left,
    end = right;
  let middleVal = list[left];

  while (start < end) {
    // 找到左边第一个比基准大的元素
    while (start < end && list[end] >= middleVal) {
      end--;
    }

    // 找到右边第一个比基准小的元素
    while (start < end && list[start] <= middleVal) {
      start++;
    }
    // 位置互换
    if (start < end) {
      [list[start], list[end]] = [list[end], list[start]];
    }
  }
  // 遍历完成，此时start === end，相遇点就是基准middleVal真正的位置
  // 由于是右边end先走，所以最终left的位置一定小于等于middleVal
  list[left] = list[start];
  // middleVal赋值到他真正的位置
  list[start] = middleVal;

  // middleVal已经在正确的位置了，继续排序他两侧的数组
  quickSort(list, left, start - 1);
  quickSort(list, start + 1, right);
};
let list = [1, 7, 5, 4, 3, 1];
quickSort(list, 0, 5);
console.log(list);
