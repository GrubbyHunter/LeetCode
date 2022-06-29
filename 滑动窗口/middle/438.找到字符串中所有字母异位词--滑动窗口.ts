/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  // 26位数组统计p中每个字母出现的次数
  let pArray = new Array(26).fill(0);

  // pArray计算P中每个字母出现次数
  for (let key of p) {
    let index = key.charCodeAt(0) - 97;
    pArray[index] += 1;
  }

  // 比较两个数组是否相等
  const equalArr = (arr1: number[], arr2: number[]): boolean => {
    if (arr1.length !== arr2.length) {
      return false;
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };

  // window统计s中每个字母出现次数
  let window = new Array(26).fill(0);
  let left = 0,
    right = 0,
    result = [];

  // 使用滑动窗口进行遍历
  while (right < s.length) {
    // 当前右边字母的下标
    let index = s[right].charCodeAt(0) - 97;
    // 右边先走，先走的字母次数统计进去
    window[index] += 1;

    // 长度相等，才比较两个窗口中出现的字母数量是否一致
    if (right - left + 1 === p.length) {
      // 这里window中是当前窗口的每个字母出现次数，而pArray是所有字母的出现次数
      // 所以window的次数很定小于等于pArray，equalArr时候window作为入参要放前面
      // 因为 equalArr中遍历的是第一个参数
      if (equalArr(window, pArray)) {
        // 满足条件，结果记录开始位置
        result.push(left)
      }
      // 左边记录结果后会移出窗口
      // 所以左边字母的次数 - 1
      window[s[left].charCodeAt(0) - 97] -= 1
      left++
    }
    // 右边边界 + 1，保证窗口跟目标长度一致，右边字母次数在开头已经 + 1了，所以这里不加
    right++;
  }

  return result;
}
// @lc code=end
