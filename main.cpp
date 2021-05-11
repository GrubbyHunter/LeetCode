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
  TreeNode *deleteNode(TreeNode *root, int key)
  {
    // 没有找到，直接返回空指针
    if (root == nullptr)
    {
      return root;
    }

    if (root->val > key)
    {
      root->left = deleteNode(root->left, key);
    }
    else if (root->val < key)
    {
      root->right = deleteNode(root->right, key);
    }

    // root->val == key 找到这个节点
    // 左右都为空，直接移除这个节点，置为空指针
    if (root->left == nullptr && root->right == nullptr)
    {
      return nullptr;
    }
    // 左子树不为空，右子树为空
    if (root->left != nullptr && root->right == nullptr)
    {
      return root->left;
    }

    // 右子树不为空，左子树为空
    if (root->right != nullptr && root->left == nullptr)
    {
      return root->right;
    }

    // 左右子树都不为空，找右子树最左面的节点
    TreeNode *cur = root->right;
    while (cur->left != nullptr)
    {
      cur = cur->left;
    }
    // 把要删除的节点的左子树作为右子树的最下面节点的左子树进行接入
    // 理解这一句，非常重要
    cur->left == root->left;
    // 右子树作为新的节点进行返回
    root = root->right;

    return root;
  }
};
// @lc code=end

int main()
{
  // new 对象返回的是地址的引用，就是一个指针
  // TreeNode *head = new TreeNode(3, new TreeNode(1, new TreeNode(0), new TreeNode(2)), new TreeNode(5, new TreeNode(4), new TreeNode(6)));
  // ListNode *head;
  TreeNode *head = new TreeNode(2, new TreeNode(1), new TreeNode(3));
  // ListNode *head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  Solution so;
  vector<int> s = {};
  //MyStack st;
  //st.push(1);
  //st.push(2);
  //st.top();
  vector<int> s1 = {1, 2, 3, 4}, s2 = {4, 3, 2, 1};
  so.deleteNode(head, 3);
  return 0;
}