#include <iostream>
// 命名空间，有命名空间才能使用std下的全局变量
using namespace std;

/*
 * @lc app=leetcode.cn id=151 lang=cpp
 * https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 * [05] 替换空格
 * 
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 示例 1：
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 */

class Solution
{
public:
  string replaceSpace(string s)
  {
    int count = 0;

    for (int i = 0; i < s.size(); i++)
    {
      if (s[i] == ' ')
      {
        count++;
      }
    }

    // 计算替换完%20之后数组的长度，这里每个空格变成了%20
    // 相当于每个空格就要多出2个元素的长度
    int maxSize = s.size() + count * 2;
    s.resize(maxSize);

    int startIndex = maxSize - 1;
    int endIndex = s.size() - 1;

    while (startIndex >= 2 && endIndex >= 0)
    {
      if (s[endIndex] != ' ')
      {
        s[startIndex] = s[endIndex];
        startIndex--;
        endIndex--;
      }
      else
      {
        s[startIndex] = '0';
        s[startIndex - 1] = '2';
        s[startIndex - 2] = '%';
      }
    }

    return s;
  }
};
// @lc code=end
