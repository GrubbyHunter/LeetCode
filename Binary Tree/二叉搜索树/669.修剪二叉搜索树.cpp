/*
 * @lc app=leetcode.cn id=669 lang=cpp
 *
 * [669] 修剪二叉搜索树
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
    TreeNode *findMiddleRoot(TreeNode *root, int low, int high)
    {
        if (root == nullptr)
        {
            return nullptr;
        }

        if (root->val >= low && root->val <= high)
        {
            return root;
        }
        if (root->val < low)
        {
            return findMiddleRoot(root->right, low, high);
        }

        return findMiddleRoot(root->left, low, high);
    }
    // 这里由于是修建原来的二叉树，所以需要加&，传递引用
    void trimLeftTree(TreeNode *&root, int low)
    {
        if (root == nullptr)
        {
            return;
        }

        // 当前节点大于做左边界，继续向左子树寻找
        if (root->val > low)
        {
            trimLeftTree(root->left, low);
        }
        // 当前节点小于做左边界，删除当前节点，当前节点的右节点代替当前节点的位置
        // 然后继续向下寻找
        else if (root->val < low)
        {
            root = root->right;
            trimLeftTree(root, low);
        }
        else
        {
            // 当前节点等于左边界值，需要移除他的左子树即可
            root->left = nullptr;
        }
    }
    void trimRightTree(TreeNode *&root, int high)
    {
        if (root == nullptr)
        {
            return;
        }

        // 当前节点小于做右边界，继续向右子树寻找
        if (root->val < high)
        {
            trimRightTree(root->right, high);
        }
        // 当前节点大于做右边界，删除当前节点，当前节点的左节点代替当前节点的位置
        // 然后继续向下寻找
        else if (root->val > high)
        {
            root = root->left;
            trimRightTree(root, high);
        }
        else
        {
            // 当前节点等于右边界值，需要移除他的右子树即可
            root->right = nullptr;
        }
    }
    TreeNode *trimBST(TreeNode *root, int low, int high)
    {
        // 首先先确定中间根节点的位置
        TreeNode *middleRoot = findMiddleRoot(root, low, high);

        if (middleRoot == nullptr)
        {
            return nullptr;
        }

        // 修剪左子树
        trimLeftTree(middleRoot->left, low);
        // 修建右子树
        trimRightTree(middleRoot->right, high);

        return middleRoot;
    }
};
// @lc code=end
