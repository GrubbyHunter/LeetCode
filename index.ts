/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function findSubsequences(nums: number[]): number[][] {
  const result: any = []
  const used: any = {}

  if (nums.length <= 1) {
    return result
  }

  const backTracking = (arr: number[], start: number) => {
    // 保存之前的递增序列
    if (arr.length >= 2) {
      result.push([...arr])
    }

    for (let i = start; i < nums.length; i++) {

      if (arr.length > 0) {
        // 上一个数大于当前，跳过当前这个数
        // 这里上一个数不是i-1，而是当前数组arr的最后一个数
        if (arr[arr.length - 1] > nums[i]) {
          continue
        }

      }

      arr.push(nums[i])
      used[i] = true
      backTracking(arr, i + 1)
      used[i] = false
      arr.pop()
    }
  }

  backTracking([], 0)

  return result
};
findSubsequences([4, 6, 7, 7])

// @lc code=end

