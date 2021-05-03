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
  TreeNode *traversal(vector<int> &inorder, vector<int> &postorder)
  {
    if (postorder.size() == 0)
    {
      return nullptr;
    }

    // 后续的最后一个节点为根节点
    int middle = postorder.back();
    TreeNode *root = new TreeNode(middle);

    if (postorder.size() == 1)
    {
      return root;
    }
    // 后序遍历舍弃掉中间的节点
    postorder.pop_back();
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
    vector<int> postOrderLeft(postorder.begin(), postorder.begin() + inOrderLeft.size());
    vector<int> postOrderRight(postorder.begin() + inOrderLeft.size(), postorder.end());

    root->left = traversal(inOrderLeft, postOrderLeft);
    root->right = traversal(inOrderRight, postOrderRight);

    return root;
  }

  TreeNode *buildTree(vector<int> &inorder, vector<int> &postorder)
  {
    if (inorder.size() == 0 || postorder.size() == 0)
    {
      return nullptr;
    }

    return traversal(inorder, postorder);
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