#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=106 lang=cpp
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
    // 切割数组
    TreeNode *traversal(vector<int> &inorder, vector<int> &postorder)
    {
        if (postorder.size() == 0)
        {
            return nullptr;
        }

        // 后续的最后一个节点为根节点
        int middle = postorder.back();
        TreeNode *root = new TreeNode(middle);

        if (postorder.size() == 1)
        {
            return root;
        }
        // 后序遍历舍弃掉中间的节点
        postorder.pop_back();
        int index;
        int isLeft = true;
        vector<int> inOrderLeft;
        vector<int> inOrderRight;

        // 分割中序遍历数组
        for (index = 0; index < inorder.size(); index++)
        {
            if (inorder[index] == middle)
            {
                isLeft = false;
                continue;
            }

            if (isLeft)
            {
                inOrderLeft.push_back(inorder[index]);
            }
            else
            {
                inOrderRight.push_back(inorder[index]);
            }
        }

        //使用中序遍历的左边长度，切割后序遍历的数组
        vector<int> postOrderLeft(postorder.begin(), postorder.begin() + inOrderLeft.size());
        vector<int> postOrderRight(postorder.begin() + inOrderLeft.size(), postorder.end());

        root->left = traversal(inOrderLeft, postOrderLeft);
        root->right = traversal(inOrderRight, postOrderRight);

        return root;
    }

    TreeNode *buildTree(vector<int> &inorder, vector<int> &postorder)
    {
        if (inorder.size() == 0 || postorder.size() == 0)
        {
            return nullptr;
        }

        return traversal(inorder, postorder);
    }
};
// @lc code=end
