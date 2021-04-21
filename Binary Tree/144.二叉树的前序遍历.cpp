#include <vector>

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
    vector<int> result;
    void perTraver(TreeNode *root, vector<int> &result)
    {
        if (root == nullptr)
        {
            return;
        }

        // 先遍历中间节点
        result.push_back(root->val);

        // 遍历左子树
        perTraver(root->left, result);

        // 遍历右子树
        perTraver(root->right, result);
    }
    // 前序遍历
    vector<int> preorderTraversal(TreeNode *root)
    {
        perTraver(root, result);
        return result;
    }
};
// @lc code=end
