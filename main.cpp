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
  TreeNode *constructMaximumBinaryTree(vector<int> &nums)
  {
    if (nums.size() == 0)
    {
      return nullptr;
    }
    if (nums.size() == 1)
    {
      return new TreeNode(nums[0]);
    }
    int index = 0;
    int middle = nums[0];
    // 找到最大的元素和下标
    for (int i = 1; i < nums.size(); i++)
    {
      if (middle < nums[i])
      {
        middle = nums[i];
        index = i;
      }
    }

    vector<int> left(nums.begin(), nums.begin() + index);
    vector<int> right(nums.begin() + index + 1, nums.end());
    TreeNode *root = new TreeNode(middle);

    root->left = constructMaximumBinaryTree(left);
    root->right = constructMaximumBinaryTree(right);

    return root;
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
  so.constructMaximumBinaryTree(s);
  return 0;
}