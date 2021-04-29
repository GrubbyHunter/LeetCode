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
    void getPath(TreeNode *root, string path, vector<string> &result)
    {
        path += to_string(root->val);
        result.push_back(path);

        if (root->left != nullptr || root->right != nullptr)
        {
            result.pop_back();
        }

        if (root->left != nullptr)
        {
            getPath(root->left, path + "->", result);
        }

        if (root->right != nullptr)
        {
            getPath(root->right, path + "->", result);
        }
    }
    vector<string> binaryTreePaths(TreeNode *root)
    {
        vector<string> result;
        if (root == nullptr)
        {
            return result;
        }

        getPath(root, "", result);

        return result;
    }
};
// @lc code=end
