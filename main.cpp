#include <iostream>
#include <unordered_set>
#include <vector>
#include <math.h>
#include <climits>

using namespace std;
class Solution
{
public:
  int reverse(int x)
  {
    int ans = 0;

    while (x != 0)
    {
      int pop = x % 10;
      // 超出范围校验
      if (ans > INT_MAX / 10 || (ans == INT_MAX / 10 && pop > 7))
        return 0;
      // 超出范围校验
      if (ans < INT_MIN / 10 || (ans == INT_MIN / 10 && pop < -8))
        return 0;

      ans = ans * 10 + pop;
      x /= 10;
    }

    return ans;
  }
};
int main()
{
  vector<int> result;
  result.push_back(0);
  result.push_back(1);
  result.push_back(0);
  result.push_back(3);
  result.push_back(12);
  Solution so;
  so.reverse(12345);
  return 0;
}