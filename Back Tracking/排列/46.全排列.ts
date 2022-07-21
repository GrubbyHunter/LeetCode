/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const result: any = []
  const length = nums.length
  const used: boolean[] = new Array(nums.length).fill(false)
  if (length === 0) {
    return result
  }

  const backTracking = (arr: number[]) => {
    // 满足长度，退出
    if (arr.length === length) {
      result.push([...arr])
      return
    }

    for (let i = 0; i < length; i++) {
      // 当前下标元素已使用，跳过
      if (used[i]) {
        continue
      }

      // 如果想领的两个元素相同，则跳过
      // 例如211，遍历第一个1时候下一次回溯已经会包含第二个1，第2个1直接跳过，避免重复
      if (i > 0 && nums[i] == nums[i - 1]) {
        continue
      }

      arr.push(nums[i])
      used[i] = true
      backTracking(arr)
      used[i] = false
      arr.pop()
    }
  }

  backTracking([])
  return result
};
// @lc code=end

