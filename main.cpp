#include <iostream>
#include <unordered_set>
#include <vector>
using namespace std;

class Solution
{
public:
  int removeDuplicates(vector<int> &nums)
  {
    if (nums.size() == 0)
    {
      return 0;
    }

    int i = 0;
    // 使用快慢指针，i为慢指针，j为快指针
    // 如果相邻的两个元素相等，那么j一直往前走，i留在原地
    // 碰到不相等的元素，那么将这个元素放在i元素后面的位置，所以要先i++再赋值
    // 这么没有删除数组中的元素，只是把不同的元素移到了前面
    // 因为题目强调 "你不需要考虑数组中超出新长度后面的元素"
    for (int j = 1; j < nums.size(); j++)
    {
      if (nums[j] != nums[i])
      {
        i++;
        nums[i] = nums[j];
      }
    }

    return i + 1;
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
  so.removeDuplicates(result);
  return 0;
}