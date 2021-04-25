using namespace std;
/*
 * @lc app=leetcode.cn id=111 lang=cpp
 *
 * [111] 二叉树的最小深度
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
    int getLevel(TreeNode *root)
    {
        if (root == nullptr)
        {
            return 0;
        }
        int leftDepth = getLevel(root->left);   // 左
        int rightDepth = getLevel(root->right); // 右
                                                // 中
        // 当一个左子树为空，右不为空，这时并不是最低点
        if (root->left == nullptr && root->right != nullptr)
        {
            return 1 + rightDepth;
        }
        // 当一个右子树为空，左不为空，这时并不是最低点
        if (root->left != nullptr && root->right == nullptr)
        {
            return 1 + leftDepth;
        }

        int result = 1 + min(leftDepth, rightDepth);
        return result;
    }

    int minDepth(TreeNode *root)
    {
        return getLevel(root);
    }
};
// @lc code=end
