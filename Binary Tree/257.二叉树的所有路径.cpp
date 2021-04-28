#include <vector>
#include <string>

using namespace std;
/*
 * @lc app=leetcode.cn id=257 lang=cpp
 *
 * [257] 二叉树的所有路径
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
    vector<string> result;
    void getPath(TreeNode *root, string rootVal)
    {
        if (rootVal == "")
        {
            rootVal = to_string(root->val);
        }
        else
        {
            rootVal = rootVal + "->" + to_string(root->val);
        }

        if (root->left != nullptr)
        {
            getPath(root->left, rootVal);
        }

        if (root->right != nullptr)
        {
            getPath(root->right, rootVal);
        }

        if (root->left == nullptr && root->right == nullptr)
        {
            result.push_back(rootVal);
        }
    }
    vector<string> binaryTreePaths(TreeNode *root)
    {
        if (root == nullptr)
        {
            return result;
        }

        getPath(root, "");

        return result;
    }
};
// @lc code=end
