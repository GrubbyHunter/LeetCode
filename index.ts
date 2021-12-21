/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
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
  for (let i = 0; i < splitIndex.length; i++) {
    resultArr.push(splitIndex[i] - startIndex)
    startIndex = splitIndex[i]
  }

  resultArr.push(s.length - startIndex - 1)
  return resultArr
};
partitionLabels("ababcbacadefegdehijhklij")
// @lc code=end

