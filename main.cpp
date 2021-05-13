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
  TreeNode *findMiddleRoot(TreeNode *root, int low, int high)
  {
    if (root == nullptr)
    {
      return nullptr;
    }

    if (root->val >= low && root->val <= high)
    {
      return root;
    }
    if (root->val < low)
    {
      return findMiddleRoot(root->right, low, high);
    }

    return findMiddleRoot(root->left, low, high);
  }
  void trimLeftTree(TreeNode *&root, int low)
  {
    if (root == nullptr)
    {
      return;
    }

    if (root->val > low)
    {
      trimLeftTree(root->left, low);
    }
    else if (root->val < low)
    {
      root = root->right;
      trimLeftTree(root, low);
    }
    else
    {
      root->left = nullptr;
    }
  }
  void trimRightTree(TreeNode *&root, int high)
  {
    if (root == nullptr)
    {
      return;
    }

    if (root->val < high)
    {
      trimRightTree(root->right, high);
    }
    else if (root->val > high)
    {
      root = root->left;
      trimRightTree(root, high);
    }
    else
    {
      root->right = nullptr;
    }
  }
  TreeNode *trimBST(TreeNode *root, int low, int high)
  {
    // 首先先确定中间根节点的位置
    TreeNode *middleRoot = findMiddleRoot(root, low, high);

    if (middleRoot == nullptr)
    {
      return nullptr;
    }

    // 修剪左子树
    trimLeftTree(middleRoot->left, low);
    // 修建右子树
    trimRightTree(middleRoot->right, high);

    return middleRoot;
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
  vector<int> s1 = {1, 2, 3, 4}, s2 = {4, 3, 2, 1};
  so.trimBST(head, 2, 4);
  return 0;
}