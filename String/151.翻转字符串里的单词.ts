/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
function reverseWords(s: string): string {
  // 首先去掉多余的空格
  let arr = s.split("")
  let slow = 1
  let fast = 1

  // 可以采用双指针法，由于最少是连续两个空格才开始减空格，最终处理完的数组单词之间都只剩一个空格
  // 所以第一个数可定满足条件，快慢指针的下标可以从1，也就是第二个数开始
  // 这样可以少一个 fast > 0 的判断
  for (; fast < arr.length; fast++) {
    // 如果连续出现两个空格以上，需要找到第一个不是空格的元素
    while (arr[fast] === " " && arr[fast - 1] === " ") {
      fast++
    }
    // 找到第一个不是空格的元素，移动到slow的位置
    arr[slow] = arr[fast]
    // 移动完，原先两个单词间的多个空格变成了一个空格，slow位置已经被处理为正确的值，他需要++
    slow++
  }

  // 最终处理完，还要处理首位的一个空格，slow后面的元素可不处理，都是原字符串中多余空格的长度
  s = arr.slice(0, slow).join("").trim()
  arr = s.split("")

  // 反转单个单词函数
  const reverseStr = (strArr: string[], left, right) => {
    while (left < right) {
      [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
      left++
      right--
    }
  }

  // 先整个语句反转一遍
  reverseStr(arr, 0, arr.length - 1)

  let currentIndex = 0

  for (let i = 0; i < arr.length; i++) {
    // 碰到空格，翻转单词
    if (arr[i] === " ") {
      reverseStr(arr, currentIndex, i - 1)
      // 重新记录当前不为空格的位置，用来下一次遍历的左边范围下标
      currentIndex = i + 1
    }
  }

  // 翻转完成，由于最后一个单词没翻转，再单独翻转一下
  reverseStr(arr, currentIndex, arr.length - 1)

  return arr.join("")
};
// @lc code=end

