/*
 * @lc app=leetcode.cn id=ti-huan-kong-ge-lcof lang=typescript
 * https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 * [05] 替换空格
 * 
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 示例 1：
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 */
// @lc code=start
function replaceSpace(s: string): string {
  let strArr = s.split("")
  let count = 0

  // 先遍历一次计算字符串中的空格数量
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === " ") {
      count++
    }
  }

  // 左指针指向原来数组的最后一个元素
  let left = strArr.length - 1
  // 右指针指向新数组长度的最有一个元素
  // 因为每个空格由" " => "%20"，长度增加了2，所以总长度增加了2 * count 
  let right = strArr.length + 2 * count - 1

  // 指针移动，把原来数组的元素从后向前依次移动
  // 这里使用从后到前，是因为，数组中如果从前到后移动，每次移动都会动到后面的元素
  while (left < right) {
    // 如果原来位置是空格，则填充%20，相当于将空格移动到后面
    if (strArr[left] === " ") {
      strArr[right] = "0"
      strArr[right - 1] = "2"
      strArr[right - 2] = "%"
      // 同时右指针进3
      right = right - 3
    } else {
      // 不是空格，左右互换
      [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
      right--
    }
    // 移动完不管是不是空格，左指针都要进1，方便进行下一次移动
    left--
  }
  return strArr.join("")
};
// @lc code=end
