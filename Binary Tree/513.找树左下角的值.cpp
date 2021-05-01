#include <queue>

using namespace std;
/*
 * @lc app=leetcode.cn id=513 lang=cpp
 *
 * [513] 找树左下角的值
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
    int findBottomLeftValue(TreeNode *root)
    {
        int result;
        queue<TreeNode *> qu;

        if (root != nullptr)
        {
            qu.push(root);
        }

        while (!qu.empty())
        {
            int size = qu.size();
            bool notFind = true;

            for (int i = 0; i < size; i++)
            {
                TreeNode *temp = qu.front();
                qu.pop();

                // 找到当前层级的最左边子节点
                // 由于左右节点是成对放入队列的，所以左节点在队列中的下标一定是偶数0,2,4
                if (notFind && temp != nullptr)
                {
                    result = temp->val;
                    notFind = false;
                }
                if (temp != nullptr)
                {
                    qu.push(temp->left);
                    qu.push(temp->right);
                }
            }
        }

        return result;
    }
};
// @lc code=end
