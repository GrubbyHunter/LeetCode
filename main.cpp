#include <iostream>
#include <string>

using namespace std;
struct ListNode
{
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
public:
  ListNode *removeElements(ListNode *head, int val)
  {
    if (head == NULL)
    {
      return NULL;
    }

    while (head != NULL && head->val == val)
    {
      head = head->next;
    }

    ListNode *current = head;

    while (head != NULL && current->next != nullptr)
    {
      if (current->next->val == val)
      {
        current->next = current->next->next;
      }
      else
      {
        current = current->next;
      }
    }

    return head;
  }
};
// @lc code=end

int main()
{
  // new 对象返回的是地址的引用，就是一个指针
  // ListNode *head = new ListNode(7, new ListNode(7, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
  //ListNode *head;
  ListNode *head = new ListNode(7, new ListNode(7));
  Solution so;
  //string str1 = "abcdefg";
  ListNode *head1 = so.removeElements(head, 7);
  return 0;
}