/*
 * @lc app=leetcode.cn id=763 lang=typescript
 *
 * [763] 划分字母区间
 */

// @lc code=start
function partitionLabels(s: string): number[] {
  let str = s.split("")
  let map: any = {}
  let arr = []

  // 使用map记录每个字符出现的第一个位置和最后一个位置
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = {
        start: i,
        end: i
      }
    } else {
      map[str[i]].end = i
    }
  }

  // 对象转化为数组
  for (let key in map) {
    const { start, end } = map[key]
    arr.push([start, end])
  }

  // 对数组开始位置，也就是左边进行生序排序
  arr.sort((a, b) => {
    return a[0] - b[0]
  })

  let end = arr[0][1]
  let splitIndex = []

  for (let i = 1; i < arr.length; i++) {
    // arr[i][0] > start
    // 新的
    if (arr[i][1] < end) {
      continue
    }

    if (arr[i][1] > end && arr[i][0] < end) {
      end = arr[i][1]
      continue
    }

    if (arr[i][0] > end) {
      // 记录分割点
      splitIndex.push(end)
      end = arr[i][1]
    }
  }


  let resultArr = []

  let startIndex = -1
  // 保存长度
  for (let i = 0; i < splitIndex.length; i++) {
    resultArr.push(splitIndex[i] - startIndex)
    startIndex = splitIndex[i]
  }

  resultArr.push(s.length - startIndex - 1)
  return resultArr
};
// @lc code=end

