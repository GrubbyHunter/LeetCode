/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
  const result = []
  const used = {}
  if (nums.length === 0) {
    return result
  }

  // 升序数组
  nums = nums.sort((a, b) => a - b)
  const backTracking = (arr: number[], start: number) => {
    result.push([...arr])

    for (let i = start; i < nums.length; i++) {
      // used[i - 1] === false，说明上一个节点没被使用，跟他是同一层级
      // 需要进行去重
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        // 这里只是当前数和上一个数相等，需要跳过当前数，到下一个数在进行回溯
        // 所以用continue只结束当前次遍历，而不是结束整个遍历
        continue
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
// @lc code=end

