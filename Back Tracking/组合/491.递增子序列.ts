/*
 * @lc app=leetcode.cn id=491 lang=typescript
 *
 * [491] 递增子序列
 */

// @lc code=start
function findSubsequences(nums: number[]): number[][] {
  const result: number[][] = []

  if (nums.length <= 1) {
    return result
  }
  // 此题由于是在现有数组里面找升序子序列，所以不能对现有数组进行排序
  const backTracking = (arr: number[], start: number) => {
    if (arr.length >= 2) {
      result.push([...arr])
    }

    // 记录本层遍历中的使用情况
    // 例如 123111，实际上1出现过之后
    // 后面的三个1不能作为递增序列，[1,1,1]不满足条件，需要过滤掉
    const used = new Array(nums.length).fill(false)

    for (let i = start; i < nums.length; i++) {
      if (i > 0 && arr[arr.length - 1] > nums[i]) {
        continue
      }

      if (used[nums[i] + 100]) {
        continue
      }

      // 当前层级，nums[i]已经被使用过
      // 这里不是与前一个元素进行比较，因为可能跨了多个元素
      // 如果元素已经出现过，说明已经包含了存在的组合，为避免重复，需要跳过
      if (used[nums[i] + 100]) {
        continue
      }
      used[nums[i] + 100] = true

      arr.push(nums[i])
      backTracking(arr, i + 1)
      // 由于是记录本层使用状态，所以不需要回溯used的状态
      arr.pop()
    }
  }

  backTracking([], 0)

  return result
};
// @lc code=end

