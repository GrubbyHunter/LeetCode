#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=654 lang=cpp
 *
 * [654] 最大二叉树
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
    TreeNode *constructMaximumBinaryTree(vector<int> &nums)
    {
        if (nums.size() == 0)
        {
            return nullptr;
        }
        if (nums.size() == 1)
        {
            return new TreeNode(nums[0]);
        }
        int index = 0;
        int middle = nums[0];
        // 找到最大的元素和下标
        for (int i = 1; i < nums.size(); i++)
        {
            if (middle < nums[i])
            {
                middle = nums[i];
                index = i;
            }
        }

        vector<int> left(nums.begin(), nums.begin() + index);
        // 这里+1是为了过滤掉已经是根节点的middle节点
        vector<int> right(nums.begin() + index + 1, nums.end());
        TreeNode *root = new TreeNode(middle);

        root->left = constructMaximumBinaryTree(left);
        root->right = constructMaximumBinaryTree(right);

        return root;
    }
};
// @lc code=end
