/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  const result: any = []
  const length = nums.length
  const used = {}
  if (length === 0) {
    return result
  }

  const backTracking = (arr) => {
    if (arr.length === length) {
      result.push([...arr])
      return
    }

    for (let i = 0; i < length; i++) {
      // 数组中不存在重复元素，所以如果已经被使用了，不在放入arr
      if (used[i]) {
        continue
      }

      arr.push(nums[i])
      used[i] = true
      backTracking(arr)
      used[i] = false
      arr.pop()
    }
  }
  // 先对数据排序，方便去重
  nums.sort((a, b) => a - b)
  backTracking([])

  return result
};
// @lc code=end

