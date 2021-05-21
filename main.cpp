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
  vector<vector<int>> result;
  vector<int> current;
  void findVector(vector<int> &candidates, int sum, int target, int startIndex, vector<bool> &used)
  {
    if (sum > target)
    {
      return;
    }
    if (sum == target)
    {
      result.push_back(current);
      return;
    }

    for (int i = startIndex; i < candidates.size(); i++)
    {

      if (i > 0 && candidates[i] == candidates[i - 1] && !used[i - i])
      {
        continue;
      }

      current.push_back(candidates[i]);
      sum += candidates[i];
      used[i] = true;
      findVector(candidates, sum, target, i + 1, used);
      used[i] = false;
      current.pop_back();
      sum -= candidates[i];
    }
  }
  vector<vector<int>> combinationSum2(vector<int> &candidates, int target)
  {
    vector<bool> used(candidates.size(), false);
    sort(candidates.begin(), candidates.end());
    findVector(candidates, 0, target, 0, used);
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
  vector<int> s1 = {1, 3, 2, 4}, s2 = {4, 3, 2, 1};
  so.combinationSum2(s1, 3);
  return 0;
}