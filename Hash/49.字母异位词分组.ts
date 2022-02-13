/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  let map = {}
  let result = []
  for (let i = 0; i < strs.length; i++) {
    let temp = strs[i].split("")
    // 排序后的字符串作为key
    let sortStr = temp.sort().join("")

    // 没有直接赋值
    if (!map[sortStr]) {
      map[sortStr] = [strs[i]]
    } else {
      // 已经存在直接添加
      map[sortStr].push(strs[i])
    }
  }

  // map转数组
  for (let key in map) {
    result.push(map[key])
  }

  return result
};
// @lc code=end

