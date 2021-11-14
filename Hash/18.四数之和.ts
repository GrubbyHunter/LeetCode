/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  // 就是在三数之和的基础上再加一层循环
  const resultArr = []
  // 先给数组进行排序，用来对结果进行去重
  nums.sort((a, b) => a - b)
  // 如果数组小于4个元素，不符合条件，直接排除
  if (nums.length < 4) {
    return []
  }

  for (let i = 0; i < nums.length - 3; i++) {
    // 如果target为负数，则这里不合适
    // 例如 [1,-2,-5,-4,-3,3,3,5] -11
    // 这里第一个数就到与-11，但是实际上有满足条件的四个数
    // if (nums[i] > target) {
    //   break;
    // }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    for (let index = i + 1; index < nums.length - 2; index++) {

      // 这里需要去重，比如-1，-1, 0，如果这次遍历的第一个元素跟上一次的第一个元素相同
      // 那么会产生重读的数组，需要去重，不必担心-1,-1的情况，因为上一次遍历时候已经统计在里面了
      if (index > i + 1 && nums[index] === nums[index - 1]) {
        continue
      }

      // 第二个元素的起始位置为当前元素的下一个
      let left = index + 1
      // 第三个元素的起始位置为重点
      let right = nums.length - 1

      while (left < right) {
        // 计算三个元素的和
        const sum = nums[i] + nums[index] + nums[left] + nums[right]

        //和太大了，右边需要左移
        if (sum > target) {
          right--
        } else if (sum < target) {
          // 和太小了，左边需要右移
          left++
        } else {
          // 和为0，满足条件，追加进结果
          resultArr.push([nums[i], nums[index], nums[left], nums[right]])
          // 这里追加完，不是马上进行下一次遍历，依然需要进行去重
          // 例如left到right为[0,0,1,2,3,3]
          // 这样直接进行下一次遍历会有重复元素
          // left当前是0，需要到最后一个0的位置
          while (left < right && nums[left] === nums[left + 1]) left++
          // right当前是3，需要最前面一个3的位置
          while (left < right && nums[right] === nums[right - 1]) right--
          // left到了0的位置，再++，到了1的位置，可以使用1进行下一次循环了
          left++
          // right到了3的位置，再--，到了2的位置，可以使用2进行下一次循环了
          right--
          // [left,right]  === [1，2]
        }
      }
    }
  }

  return resultArr
};
// @lc code=end

