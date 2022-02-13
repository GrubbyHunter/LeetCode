
// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {

  let backTracking = (str: string): boolean => {
    if (str.length === 0) {
      return true
    }

    for (let i = 0; i < wordDict.length; i++) {
      if (wordDict[i].length > str.length) {
        continue
      }

      if (str.indexOf(wordDict[i]) !== 0) {
        continue
      }


      let temp = str.substring(wordDict[i].length)

      if (backTracking(temp)) {
        return true
      }
    }

    return false
  }

  return backTracking(s)
};
wordBreak("aaaaaaa", ["aaaa", "aa"])
// @lc code=end

