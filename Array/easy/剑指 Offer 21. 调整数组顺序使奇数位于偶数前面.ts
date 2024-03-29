// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。

//  

// 示例：

// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4] 
// 注：[3,1,2,4] 也是正确的答案之一。
//  

// 提示：

// 0 <= nums.length <= 50000
// 0 <= nums[i] <= 10000


// 链接：https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof

function exchange(nums: number[]): number[] {
  let left = 0
  if (nums.length === 0) {
    return nums
  }

  for (let i = 0; i < nums.length; i++) {
    let temp = nums[left]
    // 奇数
    if (nums[i] % 2 !== 0) {
      nums[left] = nums[i]
      nums[i] = temp
      left++
    }
  }

  return nums
};