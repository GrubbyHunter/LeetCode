/*
 * @lc app=leetcode.cn id=131 lang=typescript
 *
 * [131] 分割回文串
 */

// @lc code=start
function partition(s: string): string[][] {
  let result = []
  const arrStr = s.split("")
  const size = arrStr.length

  if (size === 0) {
    return result
  }
  // 判断是否是回文的函数
  const isPalindrome = (str: string[]) => {
    let left = 0
    let right = str.length - 1
    while (left < right) {
      if (str[left] !== str[right]) {
        return false
      }
      left++
      right--
    }

    return true
  }
  const backTracking = (arr: string[], start: number) => {
    // 切割到最后一个，收集结果
    // 这里最后一个可能是前面所有的，所有不是i-1判断最后一个
    if (start === size) {
      result.push([...arr])
      return
    }

    for (let i = start; i < size; i++) {
      // 切割的位置在当前元素的后面，所以要 i + 1
      const currentArr = arrStr.slice(start, i + 1)
      // 当前切割的字符不是回文，直接进行下一次循环
      if (!isPalindrome(currentArr)) {
        continue
      }
      // join组成字符创，放入结果数组
      arr.push(currentArr.join(""))
      backTracking(arr, i + 1)
      arr.pop()
    }
  }

  backTracking([], 0)

  return result
};
// @lc code=end

