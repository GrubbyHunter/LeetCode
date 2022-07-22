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
      // 如果相邻的两个元素相同，同时上一个元素跟当前元素不在同一次DFS中，则跳过
      // 例如211，遍历第一个1时候下一次回溯已经会包含第二个1，第2个1直接跳过，避免重复
      if (i > 0 && nums[i] == nums[i - 1] && used[i - 1] === false) {
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

