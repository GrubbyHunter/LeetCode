#include <vector>

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
    // 中序遍历遍历
    vector<int> result;
    void perTraver(TreeNode *root, vector<int> &result)
    {
        if (root == nullptr)
        {
            return;
        }

        // 遍历左子树
        perTraver(root->left, result);
        // 遍历右子树
        perTraver(root->right, result);

        // 遍历中间节点
        result.push_back(root->val);
    }
    // 前序遍历
    vector<int> postorderTraversal(TreeNode *root)
    {
        perTraver(root, result);
        return result;
    }
};
// @lc code=end
