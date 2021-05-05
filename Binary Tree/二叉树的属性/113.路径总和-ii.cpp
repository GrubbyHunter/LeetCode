#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=113 lang=cpp
 *
 * [113] 路径总和 II
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
    vector<vector<int>> allResult;
    void getSum(TreeNode *root, int sum, vector<int> result)
    {
        // 当前节点已经能是叶子节点，而且和已经满足条件
        if (sum == 0 && root->left == nullptr & root->right == nullptr)
        {
            allResult.push_back(result);
            return;
        }

        if (root->left != nullptr)
        {
            sum = sum - root->left->val;
            result.push_back(root->left->val);
            getSum(root->left, sum, result);

            // 进行回溯
            result.pop_back();
            sum = sum + root->left->val;
        }

        if (root->right != nullptr)
        {
            sum = sum - root->right->val;
            result.push_back(root->right->val);
            getSum(root->right, sum, result);
        }
    }
    vector<vector<int>> pathSum(TreeNode *root, int targetSum)
    {
        vector<int> result;

        if (root == nullptr)
        {
            return allResult;
        }
        result.push_back(root->val);
        getSum(root, targetSum - root->val, result);

        return allResult;
    }
};
// @lc code=end
