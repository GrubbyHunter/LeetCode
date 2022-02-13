/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {
  // 记录缓存
  let cacheMap = {}

  let backTracking = (str: string): boolean => {
    if (str.length === 0) {
      return true
    }

    for (let i = 0; i < wordDict.length; i++) {
      // 剪枝操作：当前单词超过剩余长度，直接不符合
      if (wordDict[i].length > str.length) {
        continue
      }
      // 剪枝操作：当前单词必须在剩余单词中开头，例如"abcd"中的"ab",所以必须index为0
      // 大于0和等于-1都不符合
      if (str.indexOf(wordDict[i]) !== 0) {
        continue
      }

      // 去掉剩余字符串中wordDict[i]长度剩下的为temp
      let temp = str.substring(wordDict[i].length)
      let result

      // 剩下的temp计算过的话，保存结果，直接使用缓存
      if (cacheMap[temp] !== undefined) {
        result = cacheMap[temp]
      } else {
        result = backTracking(temp)
        // 没计算过，记录缓存
        cacheMap[temp] = result
      }

      // 这里使用substring，不改变原来的字符串，所以不需要单独做回溯
      if (result) {
        return true
      }
    }

    // 遍历完还不符合条件，则返回false
    return false
  }

  return backTracking(s)
};
// @lc code=end

