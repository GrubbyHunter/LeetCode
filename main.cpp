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
  // 前序遍历
  vector<int> preorderTraversal(TreeNode *root)
  {
    vector<int> result;
    if (root == nullptr)
    {
      return result;
    }

    // 先遍历中间节点
    result = {root->val};
    vector<int> temp;

    // 遍历左子树
    if (root->left != nullptr)
    {
      temp = preorderTraversal(root->left);
      result.insert(result.end(), temp.begin(), temp.end());
    }

    // 遍历右子树
    if (root->right != nullptr)
    {
      temp = preorderTraversal(root->right);
      result.insert(result.end(), temp.begin(), temp.end());
    }

    return result;
  }
};
// @lc code=end

int main()
{
  // new 对象返回的是地址的引用，就是一个指针
  TreeNode *head = new TreeNode(3, new TreeNode(1), new TreeNode(2));
  //ListNode *head;
  //ListNode *head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  Solution so;
  vector<int> s = {};
  //MyStack st;
  //st.push(1);
  //st.push(2);
  //st.top();
  so.preorderTraversal(head);
  return 0;
}