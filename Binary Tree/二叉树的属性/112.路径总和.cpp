using namespace std;
/*
 * @lc app=leetcode.cn id=112 lang=cpp
 *
 * [112] 路径总和
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
    bool getSum(TreeNode *root, int result)
    {
        bool left = false;
        bool right = false;

        // 叶子结点，同时和相等，满足条件
        if (root->val == result && root->left == nullptr && root->right == nullptr)
        {
            return true;
        }

        // 减去当前节点的值，剩下的和
        result = result - root->val;
        if (root->left != nullptr)
        {
            left = getSum(root->left, result);
        }
        if (root->right != nullptr)
        {
            right = getSum(root->right, result);
        }

        return left || right;
    }
    bool hasPathSum(TreeNode *root, int targetSum)
    {
        if (root == nullptr)
        {
            return false;
        }

        return getSum(root, targetSum);
    }
};
// @lc code=end
