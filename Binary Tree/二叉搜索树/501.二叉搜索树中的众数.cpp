#include <vector>
#include <stack>
#include <math.h>

using namespace std;
/*
 * @lc app=leetcode.cn id=501 lang=cpp
 *
 * [501] 二叉搜索树中的众数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution
{
public:
    vector<int> findMode(TreeNode *root)
    {
        vector<int> result;
        TreeNode *curr = root;
        int maxCount = 1;
        int count = 1;

        int preNum = INT_MAX;
        stack<TreeNode *> st;

        while (!st.empty() || curr != nullptr)
        {
            if (curr != nullptr)
            {
                st.push(curr);
                curr = curr->left;
            }
            else
            {
                curr = st.top();
                st.pop();

                // 记录出现次数
                if (curr->val == preNum)
                {
                    count++;
                }
                else
                {
                    // 默认为1次
                    count = 1;
                }

                // 超过最大次数，清空数组
                if (count > maxCount)
                {
                    maxCount = count;
                    result = {curr->val};
                }
                else if (count == maxCount)
                {
                    // 等于最大次数，追加进数组
                    result.push_back(curr->val);
                }

                preNum = curr->val;
                curr = curr->right;
            }
        }
        return result;
    }
};
// @lc code=end
