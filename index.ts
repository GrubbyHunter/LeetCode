/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function reverseWords(s: string): string {
  // 首先去掉多余的空格
  let arr: any = s.split("")
  let slow = 1
  let fast = 1

  // 可以采用双指针法，由于最少是连续两个空格才开始减空格
  // 所以第一个数可定满足条件，快慢指针的下标可以从1，也就是第二个数开始
  // 这样可以少一个 fast > 0 的判断
  for (; fast < arr.length; fast++) {
    // 如果fast和fast-1都是空格，那么需要找到下一个不是空格的元素
    while (arr[fast] === " " && arr[fast - 1] === " ") {
      fast++
    }
    // 移动到前面
    arr[slow] = arr[fast]
    // 移动之后慢指针走到下一个元素
    slow++
  }

  // 前面到下标为slow的元素，为去掉空格后的长度，然后拼接，在去掉首尾空格
  s = arr.slice(0, slow).join("").trim()
  arr = s.split("")

  // 反转单个单词
  const reverseStr = (strArr: string[], left: number, right: number) => {
    while (left < right) {
      [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
      left++
      right--
    }
  }

  // 真个语句反转一遍
  reverseStr(arr, 0, arr.length - 1)

  let currentIndex = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      reverseStr(arr, currentIndex, i - 1)
      currentIndex = i + 1
    }
  }

  reverseStr(arr, currentIndex, arr.length - 1)

  return arr.join("")
};
const arr = reverseWords("a good   example");

// @lc code=end

