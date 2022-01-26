/*
 * @lc app=leetcode.cn id=496 lang=typescript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  let signleStack = [0]; // 降序单调栈，用来记录降序的天数
  let result = []; // 用来记录结果
  // 由于两数组都不存在重复元素，这里用map来保存存nums1的value和key，方便在nums2中查找
  let map = {};

  for (let i = 1; i < nums2.length; i++) {
    // 满足降序，推入单调栈
    while (
      signleStack.length > 0 &&
      nums2[i] > nums2[signleStack[signleStack.length - 1]]
    ) {
      let index = signleStack.pop();

      // map记录nums2中下标index的元素的最近的较大元素
      map[nums2[index]] = nums2[i];
    }
    // 上面遍历完成，i找到他在单调栈中正确的位置，push进去
    signleStack.push(i);
  }

  // 遍历nums1，取出map中统计到的最近较大元素
  // 如果取不到，说明当前元素在nums2中不存在，或者，它在nums2中右侧没有比他大的，就没有统计进去
  // 直接返回-1
  for (let i = 0; i < nums1.length; i++) {
    result[i] = map[nums1[i]] || -1;
  }

  return result;
}
// @lc code=end
