#include <iostream>
#include <string>

using namespace std;
/*
 * @lc app=leetcode.cn id=707 lang=cpp
 *
 * [707] 设计链表
 */

// @lc code=start
// @lc code=start
class MyLinkedList
{
public: // 定义链表节点结构体
    struct ListNode
    {
        int val;
        ListNode *next;
        ListNode(int val) : val(val), next(nullptr) {}
        ListNode(int val, ListNode *nextNode) : val(val), next(nextNode) {}
    };

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

        // 找到对应下标的节点
        while (index > -1 && current->next != nullptr)
        {
            current = current->next;
            index--;
        }

        // index != -1表名还没循环到第index个元素
        // 但是current->next == nullptr 表明已经到结尾了
        // 所以这时候是index下标越界，返回-1
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

        // 插入指定位置
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

        // 删除指定位置
        current->next = current->next->next;
    }
};
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList* obj = new MyLinkedList();
 * int param_1 = obj->get(index);
 * obj->addAtHead(val);
 * obj->addAtTail(val);
 * obj->addAtIndex(index,val);
 * obj->deleteAtIndex(index);
 */
// @lc code=end
