#include <iostream>
#include <unordered_set>
#include <vector>
#include <math.h>

using namespace std;

class Solution
{
public:
  bool isPalindrome(int x)
  {
    int begin, end;

    if (x < 0)
    {
      return false;
    }

    int div = 1;
    // 因为不使用string，这里的累积相乘相当于记录数字的位数
    // 1234,div就等于1000
    while (x / div >= 10)
    {
      div *= 10;
    }

    while (x > 0)
    {
      // 头部数字
      int left = x / div;
      // 尾部数字
      int right = x % 10;
      // 不相等既不是回文数字
      if (left != right)
      {
        return false;
      }

      // 相等的话，去掉头部数字和尾部数字，再比较中间的部分
      x = (x % div) / 10;
      // div的话除以100，相当于自动减两位
      div /= 100;
    }

    return true;
  }
};

int main()
{
  vector<int> result;
  result.push_back(1);
  result.push_back(2);
  result.push_back(2);
  result.push_back(3);
  Solution so;
  so.isPalindrome(10022201);
  return 0;
}