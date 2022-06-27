/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  // 使用队列记录区间内的最大值，同时降序排列，这样队列每次弹出的头部就是区间的最大值
  let queue: any = [Number.MIN_SAFE_INTEGER]
  let result = []
  let left = 1, right = k - 1
  let i = 0


  // 寻找元素在降序队列中的位置，并存入
  // 这里实际上更适合用升序，吧最大值放在模拟数组的尾部
  // 这样每次删除只处理数组的尾部元素就行
  // 为了模拟栈的行为方便理解，才放在头部处理
  let findIndex = (num: number): void => {
    // 说明下，这里如果当前值超过队列最大值，会将队列前面的所有值移除
    // 因为在这个最大值移除滑动窗口前，他会一直是这个滑动窗口的最大值
    // 前面的值可以忽略不计
    if (num > queue[0]) {
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
    // 左边将要移除的元素大于队列中最大元素
    // 这里nums[left - 1]不可能出现在queue[0]的后面
    // 因为findIndex中先加入，但是较小的元素会推出队列
    if (nums[left - 1] === queue[0]) {
      // 移除队列中最大元素
      queue.shift()
    }

    // 右侧将要移动进来的元素，找到对应的位置
    findIndex(nums[right + 1])

    // 先将第一个滑动窗口的最大值放入结果
    result.push(queue[0])
    left++
    right++
  }

  return result
};
// @lc code=end

