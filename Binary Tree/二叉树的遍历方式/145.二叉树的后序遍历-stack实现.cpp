#include <vector>
#include <stack>

using namespace std;
/*
 * @lc app=leetcode.cn id=145 lang=cpp
 *
 * [145] 二叉树的后序遍历
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
    vector<int> postorderTraversal(TreeNode *root)
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
            // 先使用前序遍历，但是顺序修改中,左,右=>中,右，左
            st.push(temp->left);
            st.push(temp->right);
        }

        int size = result.size();

        // 然后将结果倒序中,右，左=>左，右，中
        for (int i = 0; i < size / 2; i++)
        {
            int temp = result[i];
            result[i] = result[size - 1 - i];
            result[size - 1 - i] = temp;
        }

        return result;
    }
};
// @lc code=end
