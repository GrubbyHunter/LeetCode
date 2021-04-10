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

// @lc code=start
class Solution
{
public:
  ListNode *reverseList(ListNode *head)
  {
    ListNode *pre = nullptr;
    ListNode *current = head;

    while (current != nullptr)
    {
      // 临时保存下一个元素
      ListNode *temp = current->next;

      // 当前元素的指针指向上一个元素
      current->next = pre;
      // 记录当前元素，下一次遍历时候使用
      pre = current;
      // 继续遍历下一个元素
      current = temp;
    }

    return pre;
  }
};
// @lc code=end

int main()
{
  // new 对象返回的是地址的引用，就是一个指针
  // ListNode *head = new ListNode(7, new ListNode(7, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
  //ListNode *head;
  ListNode *head = new ListNode(1, new ListNode(2, new ListNode(3)));
  Solution so;
  so.reverseList(head);
  return 0;
}