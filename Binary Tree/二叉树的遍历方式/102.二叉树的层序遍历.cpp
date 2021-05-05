#include <vector>
#include <stack>
#include <queue>

using namespace std;
/*
 * @lc app=leetcode.cn id=102 lang=cpp
 *
 * [102] 二叉树的层序遍历
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
    vector<vector<int>> levelOrder(TreeNode *root)
    {
        vector<vector<int>> result;
        queue<TreeNode *> que;

        if (root != nullptr)
        {
            que.push(root);
        }

        while (!que.empty())
        {

            vector<int> cur;
            int size = que.size();

            // 使用size，不用que.size，因为que被遍历pop之后，size会不断变化
            for (int i = 0; i < size; i++)
            {
                TreeNode *node = que.front();
                que.pop();
                cur.push_back(node->val);

                if (node->left)
                {
                    que.push(node->left);
                }

                if (node->right)
                {
                    que.push(node->right);
                }
            }
            result.push_back(cur);
        }

        return result;
    }
};
// @lc code=end
