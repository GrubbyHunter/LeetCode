/*
 * @lc app=leetcode.cn id=203 lang=cpp
 *
 * [203] 移除链表元素
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
    ListNode *removeElements(ListNode *head, int val)
    {
        if (head == NULL)
        {
            return NULL;
        }
        // 寻找第一个值不等于val的元素作为头指针。
        // 这一步也可以使用一个虚拟节点代替，就不需要这个遍历
        // ListNode dummyHead = new ListNode(-1);
        // dummyHead.next = head;
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
