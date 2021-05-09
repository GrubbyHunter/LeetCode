/*
 * @lc app=leetcode.cn id=235 lang=cpp
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

class Solution
{
public:
    TreeNode *lowestNode(TreeNode *root, int max, int min)
    {
        // 等于两个节点之一，说明max or min其中一个节点就是公共先祖，则直接返回
        if (root == nullptr || root->val == min || root->val == max)
        {
            return root;
        }

        // 一左一右，root就是公共先祖
        if (root->val < max && root->val > min)
        {
            return root;
        }

        // 当前节点比最小值还小，说明在右侧
        if (root->val < min)
        {
            return lowestNode(root->right, max, min);
        }
        // 当前节点比最大值还大，说明在左侧
        if (root->val > max)
        {
            return lowestNode(root->left, max, min);
        }
        return nullptr;
    }
    TreeNode *lowestCommonAncestor(TreeNode *root, TreeNode *p, TreeNode *q)
    {
        int max;
        int min;

        if (p->val > q->val)
        {
            max = p->val;
            min = q->val;
        }
        else
        {
            max = q->val;
            min = p->val;
        }

        return lowestNode(root, max, min);
    }
};
// @lc code=end
