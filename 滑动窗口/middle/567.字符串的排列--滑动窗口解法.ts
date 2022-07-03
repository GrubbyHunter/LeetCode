/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    return false;
  }

  // 判断两个数组内元素是否相等
  const isSameArr = (arr1: number[], arr2: number[]): boolean => {
    for (let i = 0; i < arr1.length; i++) {
      // 没出现过的字母不用比较
      if (arr1[i] === 0) {
        continue
      }

      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  };

  let targetArr = new Array(26).fill(0);
  let sourceArr = new Array(26).fill(0);

  // 构建目标数组，记录元素位置和出现次数
  for (let i = 0; i < s1.length; i++) {
    targetArr[s1.charCodeAt(i) - 97]++;
    sourceArr[s2.charCodeAt(i) - 97]++;
  }

  // 区间遍历，上面已经遍历过一个s1的长度，所以下面只需要遍历s2-s1的长度
  for (let i = 0; i <= s2.length - s1.length; i++) {
    // 区间内字母出现次数完全一致，说明能找到target的排列之一
    if (isSameArr(targetArr, sourceArr)) {
      return true;
    }
    //在 s2中维持一个s1长度的窗口，判断窗口内字母出现的次数是否相同
    // 移出窗口
    sourceArr[s2.charCodeAt(i) - 97]--
    // 移入窗口
    sourceArr[s2.charCodeAt(i + s1.length) - 97]++
  }

  return false;
}
// @lc code=end
