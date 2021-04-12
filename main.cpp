#include <iostream>
#include <vector>
#include <string>
#include <unordered_set>

using namespace std;

struct ListNode
{
  int val;
  ListNode *next;
  ListNode(int val) : val(val), next(nullptr) {}
  ListNode(int val, ListNode *nextNode) : val(val), next(nextNode) {}
};

// @lc code=startclass Solution {
class Solution
{
public:
  // 求和
  int getSum(int n)
  {
    int sum = 0;

    while (n > 0)
    {
      int singleNum = n % 10;
      n = n / 10;
      sum += singleNum * singleNum;
    }

    return sum;
  }

  bool isHappy(int n)
  {
    unordered_set<int> result;

    int sum = getSum(n);
    // 和 != 1，表示需要继续往下计算
    while (sum != 1)
    {
      // 和已经存在，说明之前已经生成过
      // 一段循环之后继续生成这个结果，永远不可能是快乐数
      if (result.find(sum) != result.end())
      {
        return false;
      }
      // 求和结果追加到set
      result.insert(sum);
      sum = getSum(sum);
    }

    return true;
  }
};
// @lc code=end

int main()
{
  // new 对象返回的是地址的引用，就是一个指针
  // ListNode *head = new ListNode(7, new ListNode(7, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
  //ListNode *head;
  //ListNode *head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  ListNode *head = new ListNode(1);
  Solution so;
  so.isHappy(19);
  return 0;
}