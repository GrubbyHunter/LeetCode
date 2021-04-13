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
  bool canConstruct(string ransomNote, string magazine)
  {
    unordered_map<char, int> ransomMap;
    for (char w : ransomNote)
    {
      ransomMap[w]++;
    }

    for (char w : magazine)
    {
      if (ransomMap.find(w) != ransomMap.end())
      {
        ransomMap[w]--;
      }
    }

    for (auto iter = ransomMap.begin(); iter != ransomMap.end(); ++iter)
    {
      if (iter->second > 0)
      {
        return false;
      }
    }

    return true;
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
  vector<int> nums;
  nums.push_back(2);
  nums.push_back(3);
  nums.push_back(4);
  nums.push_back(7);
  so.twoSum(nums, 9);
  return 0;
}