// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function maxProduct(words: string[]): number {
  const arrMap = new Map()
  let max = 0

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
      arr[word.charCodeAt(j) - 97] = 1
    }

    arrMap.set(i, arr)
  }


  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (hadSameLetter(i, words[j])) {
        continue
      }

      max = Math.max(max, words[i].length * words[j].length)
    }
  }

  return max
};
maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"])