#include <iostream>
#include <unordered_set>
#include <vector>
#include <math.h>

using namespace std;

class Solution
{
public:
  int findLengthOfLCIS(vector<int> &nums)
  {
    int maxSize = 1;
    int currentMaxSize = 1;

    if (nums.size() == 0)
    {
      return 0;
    }

    for (int i = 1; i < nums.size(); i++)
    {
      currentMaxSize = nums[i - 1] >= nums[i] ? 1 : currentMaxSize + 1;
      maxSize = maxSize > currentMaxSize ? maxSize : currentMaxSize;
    }

    return maxSize;
  }
};

int main()
{
  vector<int> result;
  result.push_back(1);
  result.push_back(3);
  result.push_back(5);
  result.push_back(4);
  result.push_back(7);
  Solution so;
  so.findLengthOfLCIS(result);
  return 0;
}