
// @lc code=start
function searchRange(nums: number[], target: number): number[] {

  const binarySearch = (left: number, right: number): number => {
    if (right > left) {
      return -1
    }

    if (left === right) {
      return target === nums[left] ? left : -1
    }

    let middle = Math.floor((right + left) / 2)

    if (nums[middle] === target) {
      return middle
    } else if (nums[middle] > target) {
      return binarySearch(left, middle - 1)
    } else {
      return binarySearch(middle + 1, right)
    }
  }

  let index = binarySearch(0, nums.length - 1)
  if (index === -1) {
    return [-1, -1]
  }

  let left = index, right = index
  while (left > 0) {
    if (nums[left] !== nums[left - 1]) {
      break
    }
    left--
  }
  while (right < nums.length - 1) {
    if (nums[right] !== nums[right + 1]) {
      break
    }
    right++
  }

  return [left, right]
};
searchRange([2, 2], 2)
// @lc code=end

