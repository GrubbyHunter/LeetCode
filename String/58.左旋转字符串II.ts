/*
* 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。
* 比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
* 
* 示例 1：
* 输入: s = "abcdefg", k = 2  gfedcba
* 输出: "cdefgab"
* 
* 示例 2：
* 输入: s = "lrloseumgh", k = 6
* 输出: "umghlrlose"
* 限制：
* 1 <= k < s.length <= 10000
*/
// @lc code=start
function reverseLeftWords(s: string, n: number): string {
  const arr = s.split("")

  const reverseString = (s: string[], left: number, right: number): void {
    while (left < right) {
      [s[left], s[right]] = [s[right], s[left]]
      left++
      right--
    }
  }

  // 整个字符串反转abcdefg => gfedcba
  reverseString(arr, 0, arr.length - 1)
  // 反转前length - n 个 gfedcba => cdefgba
  reverseString(arr, 0, arr.length - n)
  // 反转后n 个 gfedcba => cdefgab
  reverseString(arr, n, arr.length - 1)

  return arr.join("")
};
// @lc code=end
