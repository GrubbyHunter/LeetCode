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
  int evalRPN(vector<string> &tokens)
  {
    stack<int> st;

    // 将第一个和第二个元素放入栈
    st.push(atoi(tokens[0].c_str()));
    st.push(atoi(tokens[1].c_str()));

    for (int i = 2; i < tokens.size(); i++)
    {

      if (tokens[i] != "+" && tokens[i] != "-" && tokens[i] != "*" && tokens[i] != "/")
      {
        st.push(atoi(tokens[i].c_str()));
        continue;
      }

      int num2 = st.top();
      st.pop();
      int num1 = st.top();
      st.pop();

      int result;
      if (tokens[i] == "+")
      {
        result = num1 + num2;
      }
      else if (tokens[i] == "-")
      {
        result = num1 - num2;
      }
      else if (tokens[i] == "*")
      {
        result = num1 * num2;
      }
      else
      {
        result = num1 / num2;
      }
      st.push(result);
    }

    return st.top();
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