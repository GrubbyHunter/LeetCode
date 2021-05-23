#include <iostream>
#include <vector>
#include <string>
#include <stack>
#include <queue>
#include <algorithm>
#include <unordered_set>
#include <unordered_map>
#include <math.h>

using namespace std;

struct ListNode
{
  int val;
  ListNode *next;
  ListNode(int val) : val(val), next(nullptr) {}
  ListNode(int val, ListNode *nextNode) : val(val), next(nextNode) {}
};
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
struct TreeNode
{
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution
{
public:
  vector<vector<int>> result; // 存放结果
  vector<int> path;
  void backtracking(vector<int> &nums, int startIndex, vector<bool> used)
  {
    result.push_back(path);

    for (int i = startIndex; i < nums.size(); i++)
    {
      if (i > 0 && nums[i - 1] == nums[i] && used == false)
      {
        continue;
      }

      path.push_back(nums[i]);
      used[i] = true;
      // 这里是i+1
      backtracking(nums, i + 1, used);
      used[i] = false;
      path.pop_back();
    }
  }
  vector<vector<int>> subsetsWithDup(vector<int> &nums)
  {

    vector<bool> used(nums.size(), false);
    // 首先把给nums排序，让其相同的元素都挨在一起。
    sort(nums.begin(), nums.end());
    backtracking(nums, 0, used);
    return result;
  }
};
// @lc code=end

int main()
{
  // new 对象返回的是地址的引用，就是一个指针
  // TreeNode *head = new TreeNode(3, new TreeNode(1, new TreeNode(0), new TreeNode(2)), new TreeNode(5, new TreeNode(4), new TreeNode(6)));
  // ListNode *head;
  TreeNode *head = new TreeNode(3, new TreeNode(2, new TreeNode(1), nullptr), new TreeNode(4));
  // ListNode *head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  Solution so;
  vector<int> s = {};
  //MyStack st;
  //st.push(1);
  //st.push(2);
  //st.top();
  vector<int> s1 = {1, 2, 3}, s2 = {4, 3, 2, 1};
  so.subsets(s1);
  return 0;
}