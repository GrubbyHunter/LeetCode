#include <iostream>
#include <vector>
#include <string>
#include <stack>
#include <queue>
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
  // 快排数组
  void quickSort(vector<int> &result, unordered_map<int, int> map)
  {
    for (int i = 0; i < result.size(); i++)
    {
      for (int j = i; j < result.size(); j++)
      {

        if (map[result[i]] < map[result[j]])
        {
          int temp = result[i];
          result[i] = result[j];
          result[j] = temp;
        }
      }
    }
  }
  vector<int> topKFrequent(vector<int> &nums, int k)
  {
    // map统计元素和她出现的次数
    unordered_map<int, int> map;

    for (int num : nums)
    {
      auto it = map.find(num);
      if (it != map.end())
      {
        map[num] = it->second + 1;
      }
      else
      {
        map[num] = 1;
      }
    }

    // 记录结果的数组
    vector<int> result;
    // 遍历map
    for (auto iter = map.begin(); iter != map.end(); ++iter)
    {
      result.push_back(iter->first);
      // 快排数组
      quickSort(result, map);

      // 数组保持始终是k的长度
      if (result.size() > k)
      {
        result.pop_back();
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
  //MyStack st;
  //st.push(1);
  //st.push(2);
  //st.top();
  so.removeDuplicates("abbaca");
  return 0;
}