/*
 * @lc app=leetcode.cn id=236 lang=cpp
 *
 * [236] 二叉树的最近公共祖先
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

        // 如果找到p或者q，直接返回
        if (root == p || root == q || root == nullptr)
        {
            return root;
        }
        //采用后序遍历 先处理左右节点
        TreeNode *left = lowestCommonAncestor(root->left, p, q);
        TreeNode *right = lowestCommonAncestor(root->right, p, q);

        // 左子树和右子树都能找到p,q，说明当前节点就是最近先祖
        if (left != nullptr && right != nullptr)
        {
            return root;
        }
        // 如果左子树能找到一个，返回左子树
        // 说明另一个需要找到的节点在另外一边
        // 待后序遍历往上找，另一个节点也找到时候，则两个都找到
        // 返回此时的公共先祖
        else if (left != nullptr && right == nullptr)
        {
            return left;
        }
        else if (left == nullptr && right != nullptr)
        {
            return right;
        }
        else
        {
            return nullptr;
        }
    }
};
// @lc code=end
