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
  int getLevel(TreeNode *root)
  {
    int level = 0;

    // 完全二叉树，只需要计算左子树就能确定层级
    while (root != nullptr)
    {
      root = root->left;
      level++;
    }

    return level;
  }
  int countNodes(TreeNode *root)
  {
    if (root == nullptr)
    {
      return 0;
    }

    int leftLevel = getLevel(root->left);
    int rightLevel = getLevel(root->right);

    // 左右层级相等，那么最后一个节点在右边，左边为满树，不然只能右侧为满树
    if (leftLevel == rightLevel)
    {
      // <<是位运算符号，代表把1的二进制表示左移n位
      // 左移一位（即在原来的数后面加一个0）相当于乘以2，左移n位应该是相当于乘以2的n次方
      // 左边满树 + 中间顶点 + 右边子树数量
      return ((1 << leftLevel) - 1) + 1 + countNodes(root->right);
    }
    // 右边满树 + 中间顶点 + 左边子树数量
    return ((1 << rightLevel) - 1) + 1 + countNodes(root->left);
  }
};
// @lc code=end

int main()
{
  // new 对象返回的是地址的引用，就是一个指针
  TreeNode *head = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), nullptr));
  //ListNode *head;
  //ListNode *head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  Solution so;
  vector<int> s = {};
  //MyStack st;
  //st.push(1);
  //st.push(2);
  //st.top();
  int count = so.countNodes(head);
  return 0;
}