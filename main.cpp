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
  bool getSum(TreeNode *root, int result)
  {
    // 当前节点已经能是叶子节点，而且和已经满足条件
    if (result == 0 && root->left == nullptr & root->right == nullptr)
    {
      return true;
    }

    if (root->left != nullptr)
    {
      result = result - root->left->val;
      if (getSum(root->left, result))
      {
        return true;
      }
      // 不满足条件，进行回溯
      result = result + root->left->val;
    }

    if (root->right != nullptr)
    {
      result = result - root->right->val;
      if (getSum(root->right, result))
      {
        return true;
      }
      // 不满足条件，进行回溯
      result = result + root->right->val;
    }

    // 都不满足
    return false;
  }
  bool hasPathSum(TreeNode *root, int targetSum)
  {
    if (root == nullptr)
    {
      return false;
    }

    return getSum(root, root->val - targetSum);
  }
};
// @lc code=end

int main()
{
  // new 对象返回的是地址的引用，就是一个指针
  TreeNode *head = new TreeNode(-2, nullptr, new TreeNode(-3));
  //ListNode *head;
  //ListNode *head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  Solution so;
  vector<int> s = {};
  //MyStack st;
  //st.push(1);
  //st.push(2);
  //st.top();
  so.hasPathSum(head, -5);
  return 0;
}