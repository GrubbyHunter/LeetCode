#include <iostream>
#include <unordered_set>
#include <vector>
#include <math.h>
#include <climits>

using namespace std;

class Solution
{
public:
  vector<int> plusOne(vector<int> &digits)
  {
    int size = digits.size();
    int i = size - 1;

    while (i >= 0)
    {
      if (digits[i] == 9)
      {
        digits[i] = 0;
        i--;
      }
      else
      {
        digits[i] += 1;
        return digits;
      }
    }

    if (digits[0] == 0)
    {
      digits.insert(digits.begin(), 1);
    }

    return digits;
  }
};

int main()
{
  vector<int> result;
  result.push_back(9);
  result.push_back(1);
  result.push_back(0);
  result.push_back(9);
  result.push_back(9);
  Solution so;
  so.plusOne(result);
  return 0;
}