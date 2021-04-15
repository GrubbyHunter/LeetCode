#include <iostream>
#include <vector>
#include <string>
#include <stack>
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
class MyQueue
{
public:
  stack<int> stIn;
  stack<int> stOut;
  /** Initialize your data structure here. */
  MyQueue()
  {
  }

  /** Push element x to the back of queue. */
  void push(int x)
  {
    // 输入保存元素
    stIn.push(x);
    stack<int> temp = stIn;
    // 生成新的stackOut栈
    stack<int> newOut;

    while (!temp.empty())
    {
      // out中反向保存元素
      newOut.push(temp.top());
      temp.pop();
    }

    stOut = newOut;
  }

  /** Removes the element from in front of queue and returns that element. */
  int pop()
  {
    // 记录需要返回的头部元素
    int result = stOut.top();
    // 移除头部元素
    stOut.pop();

    stack<int> temp = stOut;
    // 生成新的stackIn栈
    stack<int> newIn;

    while (!temp.empty())
    {
      newIn.push(temp.top());
      temp.pop();
    }

    stIn = newIn;

    return result;
  }

  /** Get the front element. */
  int peek()
  {
    return stOut.top();
  }

  /** Returns whether the queue is empty. */
  bool empty()
  {
    return stOut.empty();
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
  MyQueue nq;
  vector<int> nums = {-2, 0, 0, 2, 2};

  nq.push(1);
  nq.push(2);
  nq.push(3);
  nq.push(4);
  nq.pop();
  nq.push(5);
  nq.pop();
  nq.pop();
  nq.pop();
  nq.pop();

  return 0;
}