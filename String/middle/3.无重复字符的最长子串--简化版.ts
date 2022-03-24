/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let map = new Map();
  let max = 1;
  let start = 0;

  if (s.length === 0) {
    return 0;
  }

  for (let i = 0; i < s.length; i++) {
    // 当前字母对应的ASCII code作为下标
    let index = s.charCodeAt(i);

    // 获取当前元素出现的位置，map.get(index)是之前出现的位置
    if (map.get(index) !== undefined) {
      // 这里Math.max保证当前start大于index上一次出现的位置的话，起始位置为start
      // 例如 abba，最后一个数，如果不加Math.max，start又变成了0+1=1
      // 实际上最后一个数前面的b已经有重复了，index=2，也就是第二个b的位置为起始位置，这之前的index都可以不用计算了
      start = Math.max(start, map.get(index) + 1);
    }

    // 当前位置减去上次出现的位置，再 + 1，即不重复的长度
    max = Math.max(max, i - start + 1);

    // 记录当前字母出现的下标
    map.set(index, i);
  }

  return max;
}
// @lc code=end
