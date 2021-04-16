#include <iostream>
#include <vector>
#include <string>
#include <stack>
#include <queue>
#include <unordered_set>
#include <unordered_map>

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
  string removeDuplicates(string S)
  {
    stack<char> result;

    for (char w : S)
    {
      if (result.empty())
      {
        result.push(w);
        continue;
      }

      if (result.top() == w)
      {
        result.pop();
        continue;
      }

      result.push(w);
    }

    string S1 = "";
    vector<char> cArr;

    while (!result.empty())
    {
      cArr.push_back(result.top());
      result.pop();
    }

    for (int i = cArr.size() - 1; i >= 0; i--)
    {
      S1 += cArr[i];
    }

    return S1;
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
  //MyStack st;
  //st.push(1);
  //st.push(2);
  //st.top();
  so.removeDuplicates("abbaca");
  return 0;
}