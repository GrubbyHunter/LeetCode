/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function wiggleMaxLength(nums: number[]): number {
  // 少于两个元素，不用判断，直接返回数组长度
  if (nums.length === 1) {
    return 1
  }

  let count = nums[0] === nums[1] ? 1 : 2
  if (nums.length === 2) {
    return count
  }

  // 当前数
  let perNum = nums[1]
  // 第一个差
  let preDifference = nums[0] - nums[1]

  // 数组从第三个数还是判断
  for (let i = 2; i < nums.length; i++) {
    let currentDifference = perNum - nums[i]

    if (currentDifference === 0) {
      preDifference = currentDifference
      continue
    }

    // 之前的差是正整数
    if (preDifference > 0) {
      // 下一个差依然是正整数，不符合条件
      if (currentDifference >= 0) {
        continue
      }
    } else {
      // 之前的差是负整数，下一个差依然是负整数，不符合条件
      if (currentDifference <= 0) {
        continue
      }
    }

    preDifference = currentDifference
    perNum = nums[i]
    count++
  }

  return count
};
wiggleMaxLength([3, 3, 3, 2, 5])

// @lc code=end

