#include <iostream>
#include <vector>
#include <string>
#include <unordered_set>
#include <unordered_map>

using namespace std;

struct ListNode
{
  int val;
  ListNode *next;
  ListNode(int val) : val(val), next(nullptr) {}
  ListNode(int val, ListNode *nextNode) : val(val), next(nextNode) {}
};

// @lc code=startclass Solution {
class Solution
{
public:
  vector<vector<int>> threeSum(vector<int> &nums)
  {
    vector<vector<int>> result;
    // 先对数组进行快速排序
    for (int i = 0; i < nums.size(); i++)
    {
      for (int j = i; j < nums.size(); j++)
      {
        if (nums[i] > nums[j])
        {
          int temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
        }
      }
    }

    // nums[i] + nums[left] + nums[right] = 0
    for (int i = 0; i < nums.size(); i++)
    {
      // 第一个数大于0，则后面的数加起来更不可能 == 0，直接返回结果
      if (nums[i] > 0)
      {
        return result;
      }

      // 正确去重方法
      if (i > 0 && nums[i] == nums[i - 1])
      {
        continue;
      }

      int left = i + 1;
      int right = nums.size() - 1;

      while (left < right)
      {
        // 首先对指针的两边进行去重，比如0022，实际上找到的是中间的02作为左右指针的起始位置
        while (right > left && nums[right] == nums[right - 1])
          right--;
        while (right > left && nums[left] == nums[left + 1])
          left++;

        if (nums[i] + nums[left] + nums[right] == 0)
        {
          // 符合条件
          result.push_back({nums[i], nums[left], nums[right]});

          // 找到之后继续对双指针去重
          while (right > left && nums[right] == nums[right - 1])
            right--;
          while (right > left && nums[left] == nums[left + 1])
            left++;
          // 左右各自往中间走一步
          left++;
          right--;
        }
        else if (nums[i] + nums[left] + nums[right] < 0)
        {
          // sum<0，移动左边
          left++;
        }
        else
        {
          // sum>0，移动右边
          right--;
        }
      }
    }

    return result;
  }
};
// @lc code=end

int main()
{
  // new 对象返回的是地址的引用，就是一个指针
  // ListNode *head = new ListNode(7, new ListNode(7, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
  //ListNode *head;
  //ListNode *head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  ListNode *head = new ListNode(1);
  Solution so;
  vector<int> nums = {-2, 0, 0, 2, 2};

  so.threeSum(nums);
  return 0;
}