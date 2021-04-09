#include <iostream>
#include <string>
// 命名空间，有命名空间才能使用std下的全局变量
using namespace std;

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

class Solution
{
public:
  // 反转字符串函数
  void reverseStr(string &s, int start, int end)
  {

    while (start < end)
    {
      int temp = s[start];
      s[start] = s[end];
      s[end] = temp;

      start++;
      end--;
    }
  }
  string reverseLeftWords(string s, int n)
  {
    int size = s.size();
    // 首先将整个字符串反转
    reverseStr(s, 0, size - 1);
    // 然后将前面size - k个字符反转回来
    reverseStr(s, 0, size - n - 1);
    // 最后将后面k个字符反转回来
    reverseStr(s, size - n, size - 1);

    return s;
  }
};
// @lc code=end
