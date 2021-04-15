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
class MyStack
{
public:
  queue<int> qStart;
  queue<int> qEnd;
  /** Initialize your data structure here. */
  MyStack()
  {
  }

  /** Push element x onto stack. */
  void push(int x)
  {
    qStart.push(x);
  }

  /** Removes the element on top of the stack and returns that element. */
  int pop()
  {
    int size = qStart.size();

    // 遍历qStart，直到找到他的最后一个，最后一个不进行pop去除，直接返回
    while (size > 1)
    {
      qEnd.push(qStart.front());
      qStart.pop();
      size--;
    }

    int result = qStart.front();
    qStart = qEnd; // 重新将新队列赋值给qStart

    // 清空que2
    while (!qEnd.empty())
    {
      qEnd.pop();
    }
    return result;
  }

  /** Get the top element. */
  int top()
  {
    return qStart.back();
  }

  /** Returns whether the stack is empty. */
  bool empty()
  {
    return qStart.empty();
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
  // Solution so;
  MyStack st;
  st.push(1);
  st.push(2);
  st.top();
  vector<int> nums = {-2, 0, 0, 2, 2};
  return 0;
}