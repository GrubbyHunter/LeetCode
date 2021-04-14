/*
 * @lc app=leetcode.cn id=206 lang=cpp
 *
 * [206] 反转链表
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
    ListNode *reverseList(ListNode *head)
    {
        // 记录上一个元素，也就是最终返回的头指针
        // 这个题的做法是将链表的指针反转方向即可
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
