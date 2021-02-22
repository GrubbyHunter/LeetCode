# 字符串中的第一个唯一字符

> https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/

> 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

> 案例:  
> s = "leetcode"  
> 返回 0.

> s = "loveleetcode"  
> 返回 2.  
> 注意事项：您可以假定该字符串只包含小写字母。

## 解法

> 比较字符串中元素第一次出现的位置和最后一次出现的位置，如果相同，则返回下标  
> 因为这里`indexOf`和`lastIndexOf`实际上也是一次遍历，所以复杂度为 O(n^2)

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let arr = s.split("")
  for (let i = 0; i < arr.length; i++) {
    if (s.indexOf(arr[i]) === s.lastIndexOf(arr[i])) {
      return i
    }
  }
  return -1
}
```
