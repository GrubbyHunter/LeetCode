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
  int findBottomLeftValue(TreeNode *root)
  {
    int result;
    queue<TreeNode *> qu;

    if (root != nullptr)
    {
      qu.push(root);
    }

    while (!qu.empty())
    {
      int size = qu.size();
      bool notFind = true;

      for (int i = 0; i < size; i++)
      {
        TreeNode *temp = qu.front();
        qu.pop();

        // 找到当前层级的最左边子节点
        if (notFind && temp != nullptr)
        {
          result = temp->val;
          notFind = false;
        }
        if (temp != nullptr)
        {
          qu.push(temp->left);
          qu.push(temp->right);
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
  TreeNode *head = new TreeNode(2, new TreeNode(1), new TreeNode(3));
  //ListNode *head;
  //ListNode *head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  Solution so;
  vector<int> s = {};
  //MyStack st;
  //st.push(1);
  //st.push(2);
  //st.top();
  so.findBottomLeftValue(head);
  return 0;
}