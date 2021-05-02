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
  vector<vector<int>> allResult;
  bool getSum(TreeNode *root, int sum, vector<int> result)
  {
    // 当前节点已经能是叶子节点，而且和已经满足条件
    if (sum == 0 && root->left == nullptr & root->right == nullptr)
    {
      allResult.push_back(result);
      return true;
    }

    if (root->left != nullptr)
    {
      sum = sum - root->left->val;
      result.push_back(root->left->val);
      if (getSum(root->left, sum, result))
      {
        return true;
      }

      // 不满足条件，进行回溯
      result.pop_back();
      sum = sum + root->left->val;
    }

    if (root->right != nullptr)
    {
      sum = sum - root->right->val;
      if (getSum(root->right, sum, result))
      {
        return true;
      }
      // 不满足条件，进行回溯
      result.pop_back();
      sum = sum + root->right->val;
    }

    // 都不满足
    return false;
  }
  vector<vector<int>> pathSum(TreeNode *root, int targetSum)
  {
    vector<int> result;

    if (root == nullptr)
    {
      return allResult;
    }
    result.push_back(root->val);
    getSum(root, targetSum - root->val, result);

    return allResult;
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
  so.pathSum(head, -5);
  return 0;
}