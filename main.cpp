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
  int canCompleteCircuit(vector<int> &gas, vector<int> &cost)
  {
    int curSum = 0;
    int min = INT_MAX; // 从起点出发，油箱里的油量最小值

    for (int i = 0; i < cost.size(); i++)
    {
      curSum += gas[i] - cost[i];

      if (min > curSum)
      {
        min = curSum;
      }
    }

    if (curSum < 0)
    {
      return -1;
    }
    if (min >= 0)
    {
      return 0;
    }

    for (int i = cost.size() - 1; i > 0; i--)
    {
      if (gas[i] - cost[i] - min >= 0)
      {
        return i;
      }
    }

    return -1;
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
  vector<int> s1 = {-2, 1, -3, 4, -1, 2, 1, -5, 4}, s2 = {3};
  so.canJump(s1);
  return 0;
}