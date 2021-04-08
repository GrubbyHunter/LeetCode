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
    int size = s.size();
    for (int i = 0; i < size; i++)
    {
      if (s[i] == ' ')
      {
        count++;
      }
    }

    // 计算替换完%20之后数组的长度，这里每个空格变成了%20
    // 相当于每个空格就要多出2个元素的长度
    int maxSize = size + count * 2;
    s.resize(maxSize);
    // 双指针从数组尾部向头部依次替换，保证不会动到前面的元素
    // 如果头部向尾部进行替换，每改一次都需要动到后面元素的位置
    int startIndex = maxSize - 1; // 填充后数组的最后一个元素作为慢指针
    int endIndex = size - 1;      // 原始数组最后一个元素最为快指针

    // 一直替换到第一个元素，因为startIndex -2 >= 0
    while (startIndex >= 3 && endIndex >= 0)
    {
      // 非空格的话，元素直接移动到后面
      if (s[endIndex] != ' ')
      {
        s[startIndex] = s[endIndex];
        startIndex--;
        endIndex--;
      }
      else
      {
        // 空格的话直接填充最近的三个位置，然后慢指针移动到第四个位置，同时快指针移动到下一个位置
        s[startIndex] = '0';
        s[startIndex - 1] = '2';
        s[startIndex - 2] = '%';
        startIndex -= 3;
        endIndex--;
      }
    }

    return s;
  }
};
// @lc code=end
