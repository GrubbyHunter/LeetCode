/*
 * @lc app=leetcode.cn id=19 lang=cpp
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution
{
public:
    ListNode *removeNthFromEnd(ListNode *head, int n)
    {
        // 设置一个虚拟头指针，否则[1],1这种会出现异常
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
