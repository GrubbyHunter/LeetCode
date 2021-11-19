/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */
function maxSlidingWindow(nums: number[], k: number): number[] {
  // 使用队列记录区间内的最大值，同时降序排列，这样队列每次弹出的头部就是区间的最大值
  let queue: any = [Number.MIN_VALUE]
  let result = []
  let left = 1, right = k - 1
  let i = 0

  // 寻找元素在降序队列中的位置，并存入
  // 说明下，这里如果当前值超过队列最大值，会将队列前面的所有值移除
  // 因为在这个最大值移除滑动窗口前，他会一直是这个滑动窗口的最大值
  // 前面的值可以忽略不计
  let findIndex = (num: number): void => {
    // 大于队列最大值(队列的第一个)
    if (num > queue[0]) {
      // 清空队列，重新把最大值放进去
      queue = [num]
    } else {
      let last = queue[queue.length - 1]
      // num比最后一个元素大，移除最后一个元素，比较下一个元素
      while (num > last) {
        queue.pop()
        last = queue[queue.length - 1]
      }
      // 找到num的位置，也就是他前面一个元素比他大，push进去
      queue.push(num)
    }
  }

  // 想将前k个元素作为降序放入队列
  while (i < k) {
    findIndex(nums[i])
    i++
  }

  // 先将第一个滑动窗口的最大值放入结果
  result.push(queue[0])

  while (right < nums.length - 1) {
    let max = queue[0]

    // left-1，为上一次移出范围的元素
    // 最大值等于左侧需要出滑动范围的元素的话
    if (max === nums[left - 1]) {
      // 最大值出队列
      queue.shift()
    }
    // right+1为下一个要移进来的元素
    // 找到右侧进入滑动范围的元素在队列中的位置
    findIndex(nums[right + 1])
    // 将队列第一个元素（也就是滑动窗口的最大值）放入结果
    result.push(queue[0])
    // 比较完之后进行下一次遍历
    left++
    right++
  }

  return result
};
const arr = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);

// @lc code=end

