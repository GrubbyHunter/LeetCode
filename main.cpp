#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

class Solution
{
public:
  // vector<int>& nums是引用传递，vertor<int> nums是值传递
  vector<int> twoSum(vector<int> &nums, int target)
  {
    unordered_map<int, int> map; //建立hash表存放数组元素
    vector<int> result(2);       // 建立两位数的数组返回结果
    int length = nums.size();

    if (length == 0)
    {
      return result;
    }

    // 使用map记录下标和value
    for (int i = 0; i < length; i++)
    {
      map[nums[i]] = i;
    }

    for (int i = 0; i < length; i++)
    {
      // 前面一个条件表示map中存在值，应为map中取值的复杂度为O(1)，这里采用内存空间换时间的做法
      // 后面一个条件表示符合条件的元素不能是自己本身，比如6 - 3 = 3，实际上是存在3，但是只有一个3，不符合条件
      if (map.count(target - nums[i]) > 0 && map[target - nums[i]] != i)
      {
        result[0] = i;
        result[1] = map[target - nums[i]];
        break;
      }
    }

    return result;
  }
};

int main()
{
  vector<int> result;
  result.push_back(3);
  result.push_back(2);
  result.push_back(4);
  Solution so;
  so.twoSum(result, 6);
  return 0;
}