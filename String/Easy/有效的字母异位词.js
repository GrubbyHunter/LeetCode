# 有效的字母异位词

> https://leetcode-cn.com/problems/valid-anagram/description/

> 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。  
> 异位词是指 2 个字符串中的字母都完全一样，但是排列位置可能不同

> 示例  1:  
> 输入: s = "anagram", t = "nagaram"  
> 输出: true

> 示例 2:  
> 输入: s = "rat", t = "car"  
> 输出: false

> 说明:  
> 你可以假设字符串只包含小写字母。

## 解法

> 先将两个字符串排序，然后遍历比对，复杂度为 O(n)

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  s = s.split("").sort()
  t = t.split("").sort()
  if (t.length != s.length) {
    return false
  }

  for (var i = 0; i < s.length; i++) {
    if (s[i] != t[i]) {
      return false
    }
  }

  return true
}
```
