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
  // 切割数组
  TreeNode *traversal(vector<int> &preorder, vector<int> &inorder)
  {
    if (preorder.size() == 0)
    {
      return nullptr;
    }

    // 前序的第一个节点为根节点
    int middle = preorder.front();
    TreeNode *root = new TreeNode(middle);

    if (preorder.size() == 1)
    {
      return root;
    }
    // 前序遍历舍弃掉中间的节点，也就是第一个节点

    int index;
    int isLeft = true;
    vector<int> inOrderLeft;
    vector<int> inOrderRight;

    // 分割中序遍历数组
    for (index = 0; index < inorder.size(); index++)
    {
      if (inorder[index] == middle)
      {
        isLeft = false;
        continue;
      }

      if (isLeft)
      {
        inOrderLeft.push_back(inorder[index]);
      }
      else
      {
        inOrderRight.push_back(inorder[index]);
      }
    }
    // 使用中序遍历的左子树的节点数来切割前序遍历
    int leftSize = inOrderLeft.size();
    vector<int> preOrderLeft;
    vector<int> preOrderRight;

    // 分割前序遍历数组，前序的第一个位数为中间节点，所以要去掉
    // index = 1，从第2个元素开始遍历
    for (int i = 1; i < preorder.size(); i++)
    {
      if (i - 1 < leftSize)
      {
        preOrderLeft.push_back(preorder[i]);
      }
      else
      {
        preOrderRight.push_back(preorder[i]);
      }
    }

    root->left = traversal(preOrderLeft, inOrderLeft);
    root->right = traversal(preOrderRight, inOrderRight);

    return root;
  }

  TreeNode *buildTree(vector<int> &preorder, vector<int> &inorder)
  {
    if (preorder.size() == 0 || inorder.size() == 0)
    {
      return nullptr;
    }

    return traversal(preorder, inorder);
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
  vector<int> s1 = {1, 2, 3, 4}, s2 = {4, 3, 2, 1};
  so.buildTree(s1, s2);
  return 0;
}