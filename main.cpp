#include <iostream>
#include <unordered_set>
#include <vector>
#include <math.h>

using namespace std;

class Solution
{
public:
  void moveZeroes(vector<int> &nums)
  {
    if (nums.size() == 0)
    {
      return;
    }
    int size = nums.size(), temp;
    int j = 0;

    for (int i = 0; i < size; i++)
    {
      if (nums[i] != 0)
      {
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        j++;
      }
    }
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
  so.moveZeroes(result);
  return 0;
}