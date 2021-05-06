#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=98 lang=cpp
 *
 * [98] 验证二叉搜索树
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
    void getVector(TreeNode *root, vector<int> &result)
    {
        if (root == nullptr)
        {
            return;
        }

        getVector(root->left, result);
        result.push_back(root->val);
        getVector(root->right, result);
    }
    bool isValidBST(TreeNode *root)
    {
        vector<int> result;
        // 前序遍历二叉树，将tree变成数组
        getVector(root, result);

        //如果数组是有序的，则是二叉搜索树
        for (int i = 1; i < result.size(); i++)
        {
            if (result[i - 1] >= result[i])
            {
                return false;
            }
        }

        return true;
    }
};
// @lc code=end
