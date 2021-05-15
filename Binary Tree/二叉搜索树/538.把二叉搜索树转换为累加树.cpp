using namespace std;
/*
 * @lc app=leetcode.cn id=538 lang=cpp
 *
 * [538] 把二叉搜索树转换为累加树
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
    int sum;
    TreeNode *convertBST(TreeNode *root)
    {
        // 使用反向中序遍历，也就是右->中->左的形式
        if (root == nullptr)
        {
            return nullptr;
        }

        root->right = convertBST(root->right); // right
        sum += root->val;                      //累计计算sum
        root->val = sum;                       // middle
        root->left = convertBST(root->left);   //left
        return root;
    }
};
// @lc code=end
