// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  // 数组生序排
  nums.sort((a: number, b: number) => a - b)

  if (nums.length < 0) {
    return 0
  }

  if (nums.length === 3) {
    return nums[0] + nums[1] + nums[2]
  }

  // 获取距离target更近的那个结果
  const getResult = (a: number, b: number): number => {
    if (Math.abs(target - a) > Math.abs(target - b)) {
      return b
    }

    return a
  }
  let preSum: number = Number.MIN_SAFE_INTEGER
  let result: number = Number.MIN_SAFE_INTEGER

  const backTracking = (i: number, size: number, sum: number): void => {
    if (result !== Number.MIN_SAFE_INTEGER) {
      return
    }

    if (size === 3) {
      if (sum === target) {
        result = sum
        return
      }

      if (sum > target && preSum < target) {
        result = getResult(preSum, sum)
        return
      }

      if (sum < target && preSum > target) {
        result = getResult(preSum, sum)
        return
      }

      preSum = sum
      return
    }



    for (; i < nums.length; i++) {
      sum += nums[i]
      backTracking(i + 1, size + 1, sum)
      sum -= nums[i]
    }
  }

  backTracking(0, 0, 0)

  return result === Number.MIN_SAFE_INTEGER ? preSum : result
};


threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82)