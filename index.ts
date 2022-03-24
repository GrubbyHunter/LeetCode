// @lc code=startfunction leastInterval(tasks: string[], n: number): number {
// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let map = new Map();
  let max = 1;
  let current = 0;

  if (s.length === 0) {
    return 0;
  }

  for (let i = 0; i < s.length; i++) {
    // 当前字母对应的ASCII code作为下标
    let index = s.charCodeAt(i);

    // 当前字母没出现过
    if (map.get(index) === undefined) {
      // 记录下标，同时长度+1
      map.set(index, i);
      current++;
    } else {
      // 当前字母已经出现过，preIndex为他的上一个位置
      let preIndex = map.get(index);
      // 当前位置下标减去之前出现过来的位置下标 = 新的current长度
      current = i - preIndex;
      // 记录新的下标
      map.set(index, i);

      // 处理上一个出现位置之前记录的下标，重置为未记录状态，例如"bacada"
      // i = 3时候，需要把第一个啊，preIndex = 1之前记录的下标清空，不进行统计
      for (let key of map.keys()) {
        if (map.get(key) < preIndex) {
          map.set(key, undefined);
        }
      }
    }

    max = Math.max(max, current);
  }

  return max;
}
lengthOfLongestSubstring("abcabcbb");
