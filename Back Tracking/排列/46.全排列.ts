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

