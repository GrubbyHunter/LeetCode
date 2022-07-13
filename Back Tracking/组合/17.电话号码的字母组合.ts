/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  const result: any = []
  const phoneObj = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  }
  const digitsArr = digits.split("")
  // n为结果数组中每个元素的长度，输入2个数字，name每个元素长度为2
  const n = digitsArr.length

  if (n === 0) {
    return []
  }

  const backTracking = (arrStr: string[], start: number): void => {
    // 每个按键选一个字母，长度满足条件
    if (arrStr.length === n) {
      result.push(arrStr.join(""))
      return
    }

    // 当前按键的下标
    const index = digitsArr[start]

    // 当前遍历的按键
    const arr = phoneObj[index]
    for (let i = 0; i < arr.length; i++) {
      arrStr.push(arr[i])
      backTracking(arrStr, start + 1)
      arrStr.pop()
    }
  }

  backTracking([], 0)
  return result
};
// @lc code=end

