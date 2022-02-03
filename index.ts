
// @lc code=start
function nextPermutation(nums: number[]): void {
  let i = nums.length - 2

  for (; i >= 0; i--) {
    // 找到比后一个数小的数
    if (nums[i] < nums[i + 1]) {
      // 跳出循环
      break
    }
  }



  let min = nums[i + 1], j = i + 1
  let index = j
  // 找到i+1到length-1之间大于nums[i]且最小的数
  for (; j < nums.length; j++) {
    if (nums[j] > nums[i]) {
      if (nums[j] <= min) {
        index = j
        min = nums[j]
      }
    }
  }

  // 将此数与nums[i]交换顺序
  let temp = nums[i]
  nums[i] = nums[index]
  nums[index] = temp

  // 由于之前是从后往前找i比i+1大的位置
  // 所以本身i+1到结尾为降序
  // 调整为升序排序，以便i+1到结尾这部分数最小，最近接之前的序列
  let [left, right] = [i + 1, nums.length - 1]

  while (left < right) {
    // 首尾互换，降序变升序
    [nums[left], nums[right]] = [nums[right], nums[left]]
    left++
    right--
  }
};
nextPermutation([2, 3, 1, 3, 3])
// @lc code=end

