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

        while (root)
        {
            // 中间点比最大值还大，说明两个节点都在左侧子树
            if (root->val > max)
            {
                root = root->left;
            }
            else if (root->val < min)
            {
                //中间点比最小值还小，说明两个节点都在右侧子树
                root = root->right;
            }
            else
            {
                // 小于等于最大值，大于等于最小值，符合区间条件
                return root;
            }
        }

        return nullptr;
    }
};
// @lc code=end
