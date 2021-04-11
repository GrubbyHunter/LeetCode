#include <iostream>
#include <string>

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
  ListNode *removeNthFromEnd(ListNode *head, int n)
  {
    // 设置一个虚拟头指针
    ListNode *dummyHead = new ListNode(0);
    dummyHead->next = head;

    ListNode *fast = dummyHead;
    ListNode *slow = dummyHead;

    // fast指针先走n+1步
    while (n + 1 > 0 && fast)
    {
      fast = fast->next;
      n--;
    }

    // 同时向后移动，直到fast到链表尾部
    while (fast != nullptr)
    {
      fast = fast->next;
      slow = slow->next;
    }

    // 此时的slow文第倒数n+1个节点
    // 删除他的下一个节点，也就是倒数第n个节点
    slow->next = slow->next->next;

    return dummyHead->next;
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
  so.removeNthFromEnd(head, 1);
  return 0;
}