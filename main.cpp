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
class MyLinkedList
{
public: // 定义链表节点结构体
  ListNode *head;
  ListNode *dummy;
  /** Initialize your data structure here. */
  MyLinkedList()
  {
    dummy = new ListNode(-1);
    head = nullptr;
    dummy->next = head;
  }

  /** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
  int get(int index)
  {
    ListNode *current = dummy;

    if (index < 0)
    {
      return -1;
    }

    while (index > -1 && current->next != nullptr)
    {
      current = current->next;
      index--;
    }

    if (index != -1 && current->next == nullptr)
    {
      return -1;
    }

    return current != nullptr ? current->val : -1;
  }

  /** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
  void addAtHead(int val)
  {
    ListNode *first = new ListNode(val, dummy->next);
    dummy->next = first;
  }

  /** Append a node of value val to the last element of the linked list. */
  void addAtTail(int val)
  {
    ListNode *current = dummy;
    while (current->next != nullptr)
    {
      current = current->next;
    }

    current->next = new ListNode(val);
  }

  /** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
  void addAtIndex(int index, int val)
  {
    // 插入头部
    if (index < 0)
    {
      addAtHead(val);
      return;
    }

    // 插入尾部
    if (get(index) == -1)
    {
      addAtTail(val);
      return;
    }

    ListNode *current = dummy;
    while (index > 0 && current->next != nullptr)
    {
      current = current->next;
      index--;
    }

    current->next = new ListNode(val, current->next);
  }

  /** Delete the index-th node in the linked list, if the index is valid. */
  void deleteAtIndex(int index)
  {
    if (get(index) == -1)
    {
      return;
    }

    ListNode *current = dummy;
    while (index > 0 && current->next != nullptr)
    {
      current = current->next;
      index--;
    }

    current->next = current->next->next;
  }
};
// @lc code=end

int main()
{
  // new 对象返回的是地址的引用，就是一个指针
  // ListNode *head = new ListNode(7, new ListNode(7, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
  //ListNode *head;
  ListNode *head = new ListNode(7, new ListNode(7));
  MyLinkedList linkedList;
  //string str1 = "abcdefg";
  linkedList.addAtHead(2);
  linkedList.deleteAtIndex(1);
  linkedList.addAtHead(1);
  linkedList.addAtHead(2);
  return 0;
}