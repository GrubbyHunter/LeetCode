/*
 * @lc app=leetcode.cn id=324 lang=typescript
 *
 * [324] 摆动排序 II
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums: number[]): void {
  // 题目限制了nums的长度这里可以考虑使用桶排序
  let bucket = new Array(5001).fill(0)
  let length = nums.length

  // 数组元素放入桶中，时间复杂度为O(N)
  for (let i = 0; i < length; i++) {
    // 可能一个数字出现多次，所以
    // 数组index为当前数字，value为数字出现的次数
    bucket[nums[i]]++
  }
  // 最后一个最大数 or 最小数的坐标
  let lastSmallIndex = 0
  let lastBigIndex = 0

  // 奇数长度，最后一个元素是小的数
  if ((length & 1) === 1) {
    lastSmallIndex = length - 1
    // 最后一个大数是倒数第二个元素
    lastBigIndex = length - 2
  } else {
    // 偶数长度，最后一个元素是大的数
    lastBigIndex = length - 1
    // 最后一个小数是倒数第二个元素
    lastSmallIndex = length - 2
  }

  let j = 5000
  // 桶中大的数在后半部分，所以从后往前遍历，先处理大的数
  for (let i = 1; i <= lastBigIndex; i += 2) {
    // 找到通中元素，插入到数组
    while (bucket[j] === 0) {
      j--
    }

    nums[i] = j
    // 数字出现次数-1，保证当前j已使用，下次能进入while循环
    bucket[j]--
  }

  // 处理桶中小的数
  for (let i = 0; i <= lastSmallIndex; i += 2) {
    // 找到通中元素，插入到数组
    while (bucket[j] === 0) {
      j--
    }

    nums[i] = j
    bucket[j]--
  }

  // PS: 这里使用交叉排序，从左到右big最大的在左边
  //                     从左到右small最小的也在左边
  // 避免出现中间的节点有相等的数的情况
  // 例如 [1,3,2,2,3,1]
  // 如果交叉排序就是   112233 => 211 & 332 => [2,3,1,2,1,2] 对的
  // 如果都是从小到大排 112233 => 112 & 332 => [1,3,1,3,2,2] 最后这个2,2不满足条件
};
// @lc code=end

