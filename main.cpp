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
  int getLevel(TreeNode *root)
  {
    if (root == nullptr)
    {
      return 0;
    }
    int leftDepth = getLevel(root->left);   // 左
    int rightDepth = getLevel(root->right); // 右
                                            // 中
    // 当一个左子树为空，右不为空，这时并不是最低点
    if (root->left == NULL && root->right != NULL)
    {
      return 1 + rightDepth;
    }
    // 当一个右子树为空，左不为空，这时并不是最低点
    if (root->left != NULL && root->right == NULL)
    {
      return 1 + leftDepth;
    }

    int result = 1 + min(leftDepth, rightDepth);
    return result;
  }

  int minDepth(TreeNode *root)
  {
    return getLevel(root);
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
  so.minDepth(head);
  return 0;
}