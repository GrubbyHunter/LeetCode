#include <iostream>
#include <string>

using namespace std;
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

int main()
{
  // vector<int> result;
  // result.push_back(2);
  // result.push_back(3);
  // result.push_back(1);
  // result.push_back(2);
  // result.push_back(4);
  // result.push_back(3);
  Solution so;
  string str1 = "abcdefg";
  so.reverseLeftWords(str1, 2);
  return 0;
}