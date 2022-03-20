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

    // 找到单词分界点
    while (sArr[end] !== " " && end < sArr.length) {
      end = end + 1
    }
    // 左邊
    let start = i

    i = end // 记录当前空格位置，下次进来之前i+1跳过空格，则是最新的开始诶之
    // 回退到上一个非空格位置
    end--

    // 反转
    reverseStr(start, end)
  }

  return sArr.join("")
};
// @lc code=end

