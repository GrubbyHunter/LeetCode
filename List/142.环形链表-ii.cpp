/*
 * @lc app=leetcode.cn id=142 lang=cpp
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution
{
public:
    ListNode *detectCycle(ListNode *head)
    {
        ListNode *fast = head;
        ListNode *slow = head;

        while (fast && fast->next)
        {
            // 快指针一次走两步
            fast = fast->next->next;
            // 慢指针一次走一步
            slow = slow->next;

            // 快指针和慢指针相遇，表明有环
            if (fast == slow)
            {
                ListNode *start = head; // 链表头部
                ListNode *meet = slow;  // 相遇的那个节点

                // 一个从链表头部开始走，一个从相遇节点开始走，每次都走一步
                // 遇到了即为环入口
                while (start != meet)
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
