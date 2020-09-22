#include <iostream>
#include <unordered_set>
#include <vector>
#include <math.h>
#include <climits>

using namespace std;

class Solution
{
public:
  void rotate(vector<int> &nums, int k)
  {
    int temp = 0;
    int size = nums.size();
    // 这里防止K比数组的长度还大
    k = k % size;

    while (k > 0)
    {
      // 获取最后一个元素
      temp = nums[size - 1];
      // 删除最后一个元素
      nums.pop_back();
      // 最后一个元素插入到第一个元素的位置
      nums.insert(nums.begin(), temp);
      k--;
    }
  }
};
;
int main()
{
  vector<int> result;
  result.push_back(0);
  result.push_back(1);
  result.push_back(0);
  result.push_back(3);
  result.push_back(12);
  Solution so;
  so.rotate(result, 3);
  return 0;
}