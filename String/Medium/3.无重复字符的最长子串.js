# 无重复字符的最长子串

> 给定一个字符串，请你找出其中不含有重复字符的   最长子串   的长度。

> 示例  1:
> 输入: "abcabcbb"  
> 输出: 3  
> 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

> 示例 2:
> 输入: "bbbbb"  
> 输出: 1  
> 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

> 示例 3:  
> 输入: "pwwkew"  
> 输出: 3  
> 解释: 因为无重复字符的最长子串是  "wke"，所以其长度为 3。  
> 请注意，你的答案必须是 子串 的长度，"pwke"  是一个子序列，不是子串。

## 解法

> 这里使用对象统计之前出现过的字符的位置，如果有重复出现的字符，则将他的新位置重新存入对象，然后当前起始位置向前移一位，继续计算长度，并记录，获取记录的长度中最长的长度返回

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s == null || s.length == 0) {
    return 0;
  }

  let length = s.length,
    maxLength = 0;
  let obj = {};
  let start = 0;

  for (let i = 0; i < length; i++) {
    let key = s[i];
    if (obj[key] || obj[key] === 0) {
      if (start <= obj[key]) {
        start = obj[key] + 1;
      }
    }
    let tempLength = i - start + 1;

    maxLength = maxLength > tempLength ? maxLength : tempLength;
    obj[key] = i;
  }

  return maxLength;
};
```
