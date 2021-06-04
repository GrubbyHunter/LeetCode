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
  // 排序函数，使用绝对值就行排序
  static bool cmp(int a, int b)
  {
    return abs(a) > abs(b);
  }
  int largestSumAfterKNegations(vector<int> &nums, int k)
  {
    int sum = 0;
    int size = nums.size();
    // 先通过绝对值排序
    sort(nums.begin(), nums.end(), cmp);

    for (int i = 0; i < size; i++)
    {
      // 优先将加大的负数转为正，同时消费k的数量：k--
      if (nums[i] < 0 && k != 0)
      {
        k--;
        nums[i] = abs(nums[i]);
      }

      sum += nums[i];
    }

    // 如果k依然存在，k是偶数，结果不变
    // k是奇数
    if (k % 2 != 0)
    {
      // 需要先减掉最后一个数
      sum -= nums[size - 1];
      // 然后将最后一个数的反向值
      sum -= nums[size - 1];
    }
    return sum;
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