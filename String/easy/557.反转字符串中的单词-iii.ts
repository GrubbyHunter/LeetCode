/*
 * @lc app=leetcode.cn id=557 lang=typescript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
function reverseWords(s: string): string {
  let sArr = s.split("")

  let reverseStr = (start: number, end: number): void => {
    while (start < end) {
      [sArr[start], sArr[end]] = [sArr[end], sArr[start]]
      start++
      end--
    }
  }

  for (let i = 0; i < sArr.length; i++) {
    let end = i

    while (sArr[end] !== " " && end < sArr.length) {
      end++
    }
    let start = i
    // 记录空格位置，为下一次的start的位置，
    // 这里下一次遍历会进行i++，跳过当前空格位置，所以不需要end+1
    i = end
    // 当前end为空给位置，退回到非空格位置
    end--
    // 反转
    reverseStr(start, end)
  }

  return sArr.join("")
};
// @lc code=end

