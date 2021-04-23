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
  vector<int> inorderTraversal(TreeNode *root)
  {
    stack<TreeNode *> st;
    TreeNode *temp; // 当前遍历的节点
    vector<int> result;

    if (root != nullptr)
    {
      st.push(root);
    }

    while (!st.empty())
    {
      temp = st.top();

      if (temp != nullptr)
      {
        // 中序遍历，最后遍历右节点，所以右节点最先放入栈
        if (temp->right)
        {
          st.push(temp->right);
        }

        st.push(temp); // 放入中间节点吧
        // 这里由于中间节点的判断条件是null，这里插入一个null表明获取到中间节点
        st.push(nullptr);
        // 放入左节点
        if (temp->left)
        {
          st.push(temp->left);
        }
      }
      else
      {
        st.pop();        // 移除空节点
        temp = st.top(); // 获取当前节点
        result.push_back(temp->val);
        st.pop(); // 遍历完节点后进行删除
      }
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
  so.postorderTraversal(head);
  return 0;
}