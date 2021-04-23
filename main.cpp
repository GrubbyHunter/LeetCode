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
  vector<vector<int>> levelOrder(TreeNode *root)
  {
    vector<vector<int>> result;
    queue<TreeNode *> que;

    if (root != nullptr)
    {
      que.push(root);
    }

    while (!que.empty())
    {

      vector<int> cur;
      int size = que.size();

      // 使用size，不用que.size，因为que被遍历pop之后，size会不断变化
      for (int i = 0; i < size; i++)
      {
        TreeNode *node = que.front();
        que.pop();
        cur.push_back(node->val);

        if (node->left)
        {
          que.push(node->left);
        }

        if (node->right)
        {
          que.push(node->right);
        }
      }
      result.push_back(cur);
    }

    return result;
  }
};
// @lc code=end

int main()
{
  // new 对象返回的是地址的引用，就是一个指针
  TreeNode *head = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  //ListNode *head;
  //ListNode *head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  Solution so;
  vector<int> s = {};
  //MyStack st;
  //st.push(1);
  //st.push(2);
  //st.top();
  so.levelOrder(head);
  return 0;
}