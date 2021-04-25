#include <queue>

using namespace std;
/*
 * @lc app=leetcode.cn id=104 lang=cpp
 *
 * [104] 二叉树的最大深度
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
// BFS解决
// class Solution
// {
// public:
//     int maxDepth(TreeNode *root)
//     {
//         int level = 0;
//         queue<TreeNode *> qu;

//         if (root != nullptr)
//         {
//             qu.push(root);
//         }

//         while (!qu.empty())
//         {
//             int size = qu.size();
//             level++;
//             for (int i = 0; i < size; i++)
//             {
//                 TreeNode *temp = qu.front();
//                 qu.pop();

//                 if (temp->left != nullptr)
//                 {
//                     qu.push(temp->left);
//                 }
//                 if (temp->right != nullptr)
//                 {
//                     qu.push(temp->right);
//                 }
//             }
//         }

//         return level;
//     }
// };
// 递归
class Solution
{
public:
    int getLevel(TreeNode *root)
    {
        if (root == nullptr)
        {
            return 0;
        }

        int left = getLevel(root->left);
        int right = getLevel(root->right);

        return 1 + max(left, right);
    }
    int maxDepth(TreeNode *root)
    {
        return getLevel(root);
    }
};
// @lc code=end
