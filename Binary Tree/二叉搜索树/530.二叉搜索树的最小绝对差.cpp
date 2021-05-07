#include <stack>
#include <math.h>

using namespace std;
/*
 * @lc app=leetcode.cn id=530 lang=cpp
 *
 * [530] 二叉搜索树的最小绝对差
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
    int getMinimumDifference(TreeNode *root)
    {
        int preNum = INT_MAX;
        stack<TreeNode *> st;
        TreeNode *curr = root;
        int min = INT_MAX;

        // 迭代使用中序遍历二叉搜索树，这里也可以用递归
        // 利用二叉搜索树的特性，左中右的顺序遍历，始终是递增数组
        while (!st.empty() || curr != nullptr)
        {
            if (curr != nullptr)
            {
                st.push(curr);
                curr = curr->left;
            }
            else
            {
                curr = st.top();
                st.pop();
                // 记录上一个节点的值减去当前节点，比对并存储最小差值
                int result = abs(preNum - curr->val);
                min = min < result ? min : result;

                preNum = curr->val;
                curr = curr->right;
            }
        }
        return min;
    }
};
// @lc code=end
