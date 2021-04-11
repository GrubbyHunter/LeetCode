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
  ListNode *detectCycle(ListNode *head)
  {
    ListNode *fast = head;
    ListNode *slow = head;

    while (fast && fast->next)
    {
      fast = fast->next->next;
      slow = slow->next;

      // 快指针和慢指针相遇，表明有环
      if (fast == slow)
      {
        ListNode *start = head; // 链表头部
        ListNode *meet = slow;  // 相遇的那个节点

        // 一个从链表头部开始走，一个从相遇节点开始走，每次走一步
        // 遇到了即为环入口
        while (start == meet)
        {
          start = start->next;
          meet = meet->next;
        }

        return meet;
      }
    }

    return NULL;
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