#include <iostream>
#include <vector>
#include <string>
#include <stack>
#include <queue>
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
  vector<int> findMode(TreeNode *root)
  {
    vector<int> result;
    TreeNode *curr = root;
    int maxCount = 1;
    int count = 1;

    int preNum = INT_MAX;
    stack<TreeNode *> st;

    while (!st.empty() || curr != nullptr)
    {
      if (curr != nullptr)
      {
        st.push(curr);
        curr = curr->left;
      }
      else
      {
        curr = st.top();
        st.pop();

        if (curr->val == preNum)
        {
          count++;
        }
        else
        {
          count = 1;
        }

        if (count > maxCount)
        {
          maxCount = count;
          result = {curr->val};
        }
        else if (count == maxCount)
        {
          result.push_back(curr->val);
        }

        preNum = curr->val;
        curr = curr->right;
      }
    }
    return result;
  }
};
// @lc code=end

int main()
{
  // new 对象返回的是地址的引用，就是一个指针
  // TreeNode *head = new TreeNode(3, new TreeNode(1, new TreeNode(0), new TreeNode(2)), new TreeNode(5, new TreeNode(4), new TreeNode(6)));
  // ListNode *head;
  TreeNode *head = new TreeNode(1, new TreeNode(2), new TreeNode(2));
  // ListNode *head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  Solution so;
  vector<int> s = {};
  //MyStack st;
  //st.push(1);
  //st.push(2);
  //st.top();
  vector<int> s1 = {1, 2, 3, 4}, s2 = {4, 3, 2, 1};
  so.findMode(head);
  return 0;
}