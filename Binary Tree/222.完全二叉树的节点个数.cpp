using namespace std;
/*
 * @lc app=leetcode.cn id=222 lang=cpp
 *
 * [222] 完全二叉树的节点个数
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
    int getLevel(TreeNode *root)
    {
        int level = 0;

        // 完全二叉树，只需要计算左子树就能确定层级
        while (root != nullptr)
        {
            root = root->left;
            level++;
        }

        return level;
    }
    int countNodes(TreeNode *root)
    {
        if (root == nullptr)
        {
            return 0;
        }

        int leftLevel = getLevel(root->left);
        int rightLevel = getLevel(root->right);

        // 左右层级相等，那么最后一个节点在右边，左边为满树，不然只能右侧为满树
        if (leftLevel == rightLevel)
        {
            // <<是位运算符号，代表把1的二进制表示左移n位
            // 左移一位（即在原来的数后面加一个0）相当于乘以2，左移n位应该是相当于乘以2的n次方
            // 左边满树 + 中间顶点 + 右边子树数量
            return ((1 << leftLevel) - 1) + 1 + countNodes(root->right);
        }
        // 右边满树 + 中间顶点 + 左边子树数量
        return ((1 << rightLevel) - 1) + 1 + countNodes(root->left);
    }
};
// @lc code=end
