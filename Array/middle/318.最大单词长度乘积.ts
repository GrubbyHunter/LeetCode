/*
 * @lc app=leetcode.cn id=318 lang=typescript
 *
 * [318] 最大单词长度乘积
 */

// @lc code=start
function maxProduct(words: string[]): number {
  const arrMap = new Map()
  let max = 0

  // 判断当前str与下标为i的单词中是否有重复字母
  const hadSameLetter = (i: number, str: string): boolean => {
    let targetArr = arrMap.get(i)

    for (let j = 0; j < str.length; j++) {
      if (targetArr[str.charCodeAt(j) - 97] === 1) {
        return true
      }
    }

    return false
  }

  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    let arr = new Array(26).fill(0)

    for (let j = 0; j < word.length; j++) {
      // 字母的ascii code作为key存入数组，数字下标为1表示当前ASCII code下标有这个字母
      arr[word.charCodeAt(j) - 97] = 1
    }

    arrMap.set(i, arr)
  }


  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      // 有重复字母，过滤
      if (hadSameLetter(i, words[j])) {
        continue
      }

      max = Math.max(max, words[i].length * words[j].length)
    }
  }

  return max
};
// @lc code=end

