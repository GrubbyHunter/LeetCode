#include <iostream>
#include <unordered_set>
#include <vector>
using namespace std;

class Solution
{
public:
  bool containsDuplicate(vector<int> &nums)
  {
    // unordered_set key是唯一的
    unordered_set<int> set;
    int size = nums.size();

    for (int i = 0; i < size; i++)
    {
      if (set.count(nums[i]) > 0)
      {
        return true;
      }

      set.insert(nums[i]);
    }

    return false;
  }
};

int main()
{
  vector<int> result;
  result.push_back(1);
  result.push_back(2);
  result.push_back(3);
  result.push_back(4);
  Solution so;
  so.containsDuplicate(result);
  return 0;
}