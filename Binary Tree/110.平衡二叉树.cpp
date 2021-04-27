#include <queue>
#include <math.h>

using namespace std;
/*
 * @lc app=leetcode.cn id=110 lang=cpp
 *
 * [110] 平衡二叉树
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
    // 获取单个节点左右子数的层级差
    int getDepth(TreeNode *node)
    {
        if (node == NULL)
        {
            return 0;
        }

        int leftDepth = getDepth(node->left);
        if (leftDepth == -1)
            return -1; // 说明左子树已经不是二叉平衡树

        int rightDepth = getDepth(node->right);
        if (rightDepth == -1)
            return -1; // 说明右子树已经不是二叉平衡树

        return abs(leftDepth - rightDepth) > 1 ? -1 : 1 + max(leftDepth, rightDepth);
    }
    bool isBalanced(TreeNode *root)
    {
        return getDepth(root) == -1 ? false : true;
    }
};
// @lc code=end
