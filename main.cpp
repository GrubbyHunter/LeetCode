#include <iostream>
#include <unordered_set>
#include <vector>
#include <math.h>
#include <climits>

using namespace std;
class Solution
{
public:
  // 反转函数
  void reverse(string &s, int start, int end)
  {
    for (int i = start, j = end; i < j; i++, j--)
    {
      int temp = s[i];
      s[i] = s[j];
      s[j] = temp;
    }
  }
  void replaceSpace(string &s)
  {
    int fastIndex = 0;
    int slowIndex = 0;
    int size = s.size();

    // 计算出字符串首部空格的位置，fastIndex定位到第一个不是空格的字符
    while (size > 0 && fastIndex < size && s[fastIndex] == ' ')
    {
      fastIndex++;
    }

    // 替换字符串首部和中间部分的空格
    while (fastIndex < size)
    {
      // 字符串中出现连续空格，快指针继续向后移动，直到找到第一个非空格元素，移动到前面
      if (fastIndex >= 1 && s[fastIndex] == ' ' && s[fastIndex - 1] == ' ')
      {
        fastIndex++;
      }
      else
      {
        // 正常替换
        s[slowIndex] = s[fastIndex];
        fastIndex++;
        slowIndex++;
      }
    }

    //最终移动完成后slowIndex指向最后一个，如果最后一个是空格，remove掉尾部的空格
    if (slowIndex > 1 && s[slowIndex - 1] == ' ')
    {
      s.resize(slowIndex - 1);
    }
    else
    {
      s.resize(slowIndex);
    }
  }
  string reverseWords(string s)
  {

    int startIndex = 0;
    int endIndex = 0;
    // 首先将字符串中多余的空格去掉
    replaceSpace(s);
    // 获取最新的字符串长度
    int size = s.size();
    // 然后先反转整个字符串，the sky => yks eht
    reverse(s, 0, size - 1);

    while (endIndex < size)
    {
      while (s[endIndex] != ' ' && endIndex < size)
      {
        endIndex++;
      }

      // 反转单个单词
      reverse(s, startIndex, endIndex - 1);
      // 记录下一个单词的首部位置
      endIndex++;
      startIndex = endIndex;
    }

    return s;
  }
};
int main()
{
  vector<int> result;
  result.push_back(2);
  result.push_back(3);
  result.push_back(1);
  result.push_back(2);
  result.push_back(4);
  result.push_back(3);
  Solution so;
  so.reverseWords("  hello world  ");
  return 0;
}