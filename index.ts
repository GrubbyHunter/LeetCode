// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function search(nums: number[], target: number): number {
  const binarySearch = (left: number, right: number): number => {
    if (left === right) {
      return nums[left] === target ? left : -1
    }

    let mid = Math.floor((left + right) / 2)

    if (nums[mid] > target) {
      return binarySearch(left, mid - 1)
    } else if (nums[mid] < target) {
      return binarySearch(mid + 1, right)
    } else {
      return mid
    }
  }

  return binarySearch(0, nums.length - 1)
};
search([-1, 0, 3, 5, 9, 12], 9)