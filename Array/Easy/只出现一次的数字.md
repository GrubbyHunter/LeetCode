# 只出现一次的数字

> https://leetcode-cn.com/problems/single-number/description/

> 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

> 说明：
> 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

> 示例 1:  
> 输入: [2,2,1]  
> 输出: 1

> 示例  2:
> 输入: [4,1,2,1,2]  
> 输出: 4

## 解法

> 使用位运算，因为相同的数字位运算结果为 0，1^1 = 0，但是不同的数字结果为 0，因为最终只存在一个不同的数字，所以其他数字都是能配对的  
> 这样其他数字累计^位运算的结果为 0，然后 0 与那个独立的数字的位运算结果就是那个独立的数字，复杂度为 O(n)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let single = nums[0];
  for (let i = 1; i < nums.length; i++) {
    single ^= nums[i];
  }
  return single;
};
```
