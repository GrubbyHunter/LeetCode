# 两个数组的交集 II

> https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/description/  
> 给定两个数组，编写一个函数来计算它们的交集。

> 示例 1:  
> 输入: nums1 = [1,2,2,1], nums2 = [2,2]  
> 输出: [2,2]

> 示例 2:  
> 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]  
> 输出: [4,9]

> 说明：  
> 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
> 我们可以不考虑输出结果的顺序。

## 解法

> 这里先将其中一个数组`nums1`转成对象，然后对象的 key 就是数组中的数字  
> 这样再遍历第二个数组`nums2`,判断`nums1`里面是否存在元素(`seen.hasOwnProperty(num)`)，存在的话在判断`nums1`里面是否也存在(`seen[num] > 0`)，都存在的话则保存起来  
> 这里虽然是没有嵌套遍历，但是`hasOwnProperty`相当于 for 循环，所以复杂度是 `O(m*n)`

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) {
    return []
  }

  var seen = {}

  nums1.forEach(function(num) {
    seen[num] = seen[num] + 1 || 1
  })

  const result = []

  nums2.forEach(function(num) {
    if (seen.hasOwnProperty(num) && seen[num] > 0) {
      result.push(num)
      seen[num] -= 1
    }
  })

  return result
}
```
