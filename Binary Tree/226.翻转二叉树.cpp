#include <queue>

using namespace std;
/*
 * @lc app=leetcode.cn id=226 lang=cpp
 *
 * [226] 翻转二叉树
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
    TreeNode *invertTree(TreeNode *root)
    {
        queue<TreeNode *> qu;
        if (root != nullptr)
        {
            qu.push(root);
        }

        while (!qu.empty())
        {
            TreeNode *cur = qu.front();
            qu.pop();

            if (cur != nullptr)
            {
                TreeNode *temp = cur->left;
                cur->left = cur->right;
                cur->right = temp;

                qu.push(cur->left);
                qu.push(cur->right);
            }
        }

        return root;
    }
};
// @lc code=end
