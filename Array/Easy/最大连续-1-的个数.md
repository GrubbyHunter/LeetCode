# 最大连续 1 的个数

> 给定一个二进制数组， 计算其中最大连续 1 的个数。  
>  示例 1:  
> 输入: [1,1,0,1,1,1]  
> 输出: 3  
>  解释: 开头的两位和最后的三位都是连续 1，所以最大连续 1 的个数是 3.
> 注意：  
> 输入的数组只包含  0 和 1。  
> 输入数组的长度是正整数，且不超过 10,000。

## 解法

> 这里是碰到 1 就进行累加统计，然后碰到 0 就清空然后重新统计，并且家之前统计的最大长度与当前长度比较，获取其较大的值

```javascript
/**
 @param {number[]} nums
 @return {number}
  */
var findMaxConsecutiveOnes = function(nums) {
  let sum = 0,
    tempSum = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      tempSum++;
    } else {
      sum = sum > tempSum ? sum : tempSum;
      tempSum = 0;
    }
  }

  return Math.max(sum, tempSum);
};
```
