#include <vector>
#include <stack>

using namespace std;
/*
 * @lc app=leetcode.cn id=94 lang=cpp
 *
 * [94] 二叉树的中序遍历
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
    vector<int> inorderTraversal(TreeNode *root)
    {
        stack<TreeNode *> st;
        TreeNode *current = root;
        vector<int> result;

        // 中间节点刚遍历完，stack可能为空，所有循环条件满足二选一即可
        while (!st.empty() || current != nullptr)
        {
            if (current != nullptr)
            {
                st.push(current);
                current = current->left;
            }
            else
            {
                current = st.top(); // 从栈里弹出的数据，就是要处理的数据（放进result数组里的数据）
                st.pop();
                result.push_back(current->val); // 中
                current = current->right;       // 右
            }
        }

        return result;
    }
};
// @lc code=end
