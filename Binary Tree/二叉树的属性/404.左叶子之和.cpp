using namespace std;

/*
 * @lc app=leetcode.cn id=404 lang=cpp
 *
 * [404] 左叶子之和
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
    int getSum(TreeNode *root, bool isLeft, int result)
    {

        if (root == nullptr)
        {
            return result;
        }

        if (root->left == nullptr && root->right == nullptr && isLeft)
        {
            return result + root->val;
        }

        int left = getSum(root->left, true, result);
        int right = getSum(root->right, false, result);

        return result + left + right;
    }
    int sumOfLeftLeaves(TreeNode *root)
    {
        int sum = 0;
        return getSum(root, false, 0);
    }
};
// @lc code=end
