/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1

  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1
  }
  while (left < right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (nums[left] === target) {
      return left
    }

    if (nums[right] === target) {
      return right
    }

    if (left === mid || right === mid) {
      return -1
    }

    // 左区间正常的升序
    if (nums[mid] > nums[left]) {
      // target在左区间，正常二分查找
      if (target > nums[left] && target < nums[mid]) {
        right = mid - 1
        continue
      }

      // target在右区间
      left = mid + 1
      continue
    }

    // 如果左区间不是正常排序，那么右区间肯定是正常的升序
    if (nums[mid] < nums[right]) {
      // target在右区间，正常二分查找
      if (target > nums[mid] && target < nums[right]) {
        left = mid + 1
        continue
      }

      // target在左区间
      right = mid - 1
      continue
    }
  }

  return -1
};
// @lc code=end

