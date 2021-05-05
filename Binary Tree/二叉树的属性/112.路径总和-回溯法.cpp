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
        // 当前节点已经能是叶子节点，而且和已经满足条件
        if (result == 0 && root->left == nullptr & root->right == nullptr)
        {
            return true;
        }

        if (root->left != nullptr)
        {
            result = result - root->left->val;
            if (getSum(root->left, result))
            {
                return true;
            }
            // 不满足条件，进行回溯
            result = result + root->left->val;
        }

        if (root->right != nullptr)
        {
            result = result - root->right->val;
            if (getSum(root->right, result))
            {
                return true;
            }
            // 不满足条件，进行回溯
            result = result + root->right->val;
        }

        // 都不满足
        return false;
    }
    bool hasPathSum(TreeNode *root, int targetSum)
    {
        if (root == nullptr)
        {
            return false;
        }

        return getSum(root, targetSum - root->val);
    }
};
// @lc code=end
