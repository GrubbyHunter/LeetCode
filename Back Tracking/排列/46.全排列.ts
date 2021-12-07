/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const result: any = []
  const length = nums.length
  const used: any = {}
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
      // 数组中不存在重复元素，所以如果已经被使用了，不在放入arr
      if (used[i]) {
        continue
      }

      // 如果当前元素和前一个相同，name把他取出来和把前一个元素取出来
      // 跟后面元素组成的排列结果是一样的，这时候需要去重
      if (i > 0 && nums[i] === nums[i - 1]) {
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

