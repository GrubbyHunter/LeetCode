/*
 * @lc app=leetcode.cn id=406 lang=typescript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
function reconstructQueue(people: number[][]): number[][] {
  // 通过身高进行降序排序，这样保证高的人排在前面
  let sortByHigh = (a, b) => {
    // 身高不相等，直接身高大的排前面
    if (b[0] !== a[0]) {
      return b[0] - a[0]
    } else {
      // 身高相等，人数小的排前面，因为人数是小于等于，如果人数达的排前面，则不符合要求
      return a[1] - b[1]
    }
  }
  let result: any = []
  // 同时有身高和人数两个纬度的条件，优先使用一个维度的条件进行排序
  // 如果使用人数排序，排序完人数不符合条件，身高也不符合条件
  // 所以这里优先使用身高维度进行降序排序
  people.sort(sortByHigh)

  for (let i = 0; i < people.length; i++) {
    // 这里使用了数组的insert，实际上可以自己实现splice方法
    // people[i][1]为前面比他高的人数，因为身高从高到低排列
    // 所以前面插入的人身高逗比当前的高
    // people[i][1]作为插入的下标，能够保证前面一定有people[i][1]个人比他高
    result.splice(people[i][1], 0, people[i])
  }

  return result
};
// @lc code=end

