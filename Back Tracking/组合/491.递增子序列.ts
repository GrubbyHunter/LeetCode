/*
 * @lc app=leetcode.cn id=491 lang=typescript
 *
 * [491] 递增子序列
 */

// @lc code=start
function findSubsequences(nums: number[]): number[][] {
  const result: any = []

  if (nums.length <= 1) {
    return result
  }

  const backTracking = (arr: number[], start: number) => {
    // 保存之前的递增序列
    if (arr.length >= 2) {
      result.push([...arr])
    }

    const used = []
    for (let i = start; i < nums.length; i++) {
      // 上一个数大于当前，跳过当前这个数
      // 这里上一个数不是i-1，而是当前数组arr的最后一个数
      if (arr.length > 0 && arr[arr.length - 1] > nums[i]) {
        continue
      }

      // 当前层级，nums[i]已经被使用过
      // 这里不是与前一个元素进行比较，因为可能跨了多个元素
      // 如果元素已经出现过，说明已经包含了存在的组合，为避免重复，需要跳过
      if (used[nums[i] + 100]) {
        continue
      }

      arr.push(nums[i])
      // 数组范围[-100,100]，这里将他的值转换为正整数作为key
      // 使用了的话，标记为true
      used[nums[i] + 100] = true
      backTracking(arr, i + 1)
      // 这里由于是当前层级记录used，所以不需要回溯时候重置为false
      // 跳出当前层级遍历直接会清空
      arr.pop()
    }
  }

  backTracking([], 0)

  return result
};
// @lc code=end

