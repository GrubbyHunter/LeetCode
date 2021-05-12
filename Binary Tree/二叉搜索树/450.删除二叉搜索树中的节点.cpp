using namespace std;
/*
 * @lc app=leetcode.cn id=450 lang=cpp
 *
 * [450] 删除二叉搜索树中的节点
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
    TreeNode *deleteNode(TreeNode *root, int key)
    {
        // 没有找到，直接返回空指针
        if (root == nullptr)
        {
            return root;
        }

        if (root->val > key)
        {
            root->left = deleteNode(root->left, key);
        }
        else if (root->val < key)
        {
            root->right = deleteNode(root->right, key);
        }
        else
        {
            // root->val == key 找到这个节点
            // 左右都为空，直接移除这个节点，置为空指针
            if (root->left == nullptr && root->right == nullptr)
            {
                return nullptr;
            }
            // 左子树不为空，右子树为空
            if (root->left != nullptr && root->right == nullptr)
            {
                return root->left;
            }

            // 右子树不为空，左子树为空
            if (root->right != nullptr && root->left == nullptr)
            {
                return root->right;
            }

            // 左右子树都不为空，找右子树最左面的节点
            TreeNode *cur = root->right;
            while (cur->left != nullptr)
            {
                cur = cur->left;
            }
            // 把要删除的节点的左子树作为右子树的最下面节点的左子树进行接入
            // 理解这一句，非常重要
            cur->left = root->left;
            // 右子树作为新的节点进行返回
            root = root->right;

            return root;
        }
        return root;
    }
};
// @lc code=end
