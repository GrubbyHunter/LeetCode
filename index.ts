/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function replaceSpace(s: string): string {
  let strArr = s.split("")
  let count = 0
  // 先遍历一次计算字符串中的空格数量
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === " ") {
      count++
    }
  }

  let left = strArr.length - 1
  let right = strArr.length + 2 * count - 1

  while (left < right) {
    if (strArr[left] === " ") {
      strArr[right] = "0"
      strArr[right - 1] = "2"
      strArr[right - 2] = "%"
      right = right - 3
    } else {
      [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
      right--
    }
    left--

  }
  return strArr.join("")
};
const arr = replaceSpace("we are happy.");

// @lc code=end

