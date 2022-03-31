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
    let index = s[right].charCodeAt(0) - 97;
    // 右边先走，先走的字母次数统计进去
    window[index] += 1;

    if (right - left + 1 === p.length) {
      // 左右长度等于p的长度时候，比较数组是否相同
      if (equalArr(pArray, window)) {
        result.push(left);
      }
      // 比较完之后，左测的字母次数-1
      let leftIndex = s[left].charCodeAt(0) - 97;
      window[leftIndex] -= 1;

      // 左测移动1步，这样，等下长度不相等了，右侧需要在走一步，才能长度相等
      left++;
    }

    right++;
  }

  return result;
}
// @lc code=end
