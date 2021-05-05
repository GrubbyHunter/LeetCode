#include <stack>

using namespace std;
/*
 * @lc app=leetcode.cn id=144 lang=cpp
 *
 * [144] 二叉树的前序遍历
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
    vector<int> preorderTraversal(TreeNode *root)
    {
        stack<TreeNode *> st;
        vector<int> result;
        st.push(root);

        while (!st.empty())
        {
            TreeNode *temp = st.top();
            st.pop();

            if (temp == nullptr)
            {
                continue;
            }
            result.push_back(temp->val);
            // 栈是先进后出，这里是要先遍历左节点，所以先push右节点
            st.push(temp->right);
            st.push(temp->left);
        }

        return result;
    }
};
// @lc code=end
