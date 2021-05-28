#include <iostream>
#include <vector>
#include <string>
#include <stack>
#include <queue>
#include <algorithm>
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
  int wiggleMaxLength(vector<int> &nums)
  {
    int result = 1;
    int preDiff = 0;
    int curDiff = 0;
    for (int i = 1; i < nums.size(); i++)
    {
      // i-1这个元素和下一个元素i的差
      curDiff = nums[i] - nums[i - 1];
      // 如果中间的数 - 上一个数大于0 同时 下一个数 - 中间的数小于0，中间的数在波峰，满足条件
      // 中间的数 - 上一个数小于于0 同时 下一个数 - 中间的数大于0，中间的数在波谷，满足条件
      if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0))
      {
        result++;
        preDiff = curDiff;
      }
    }

    return result;
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
  vector<int> s1 = {1, 7, 4, 9, 2, 5}, s2 = {3};
  so.wiggleMaxLength(s1);
  return 0;
}