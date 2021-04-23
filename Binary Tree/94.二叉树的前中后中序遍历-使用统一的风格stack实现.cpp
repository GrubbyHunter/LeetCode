#include <vector>
#include <stack>

using namespace std;
/*
 * @lc app=leetcode.cn id=94 lang=cpp
 *
 * [94] 二叉树的中序遍历
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
    vector<int> inorderTraversal(TreeNode *root)
    {
        stack<TreeNode *> st;
        TreeNode *temp; // 当前遍历的节点
        vector<int> result;

        if (root != nullptr)
        {
            st.push(root);
        }

        while (!st.empty())
        {
            temp = st.top();

            if (temp != nullptr)
            {
                st.pop(); // 移除当前节点，再将右中左添加，这里的左就是他自己
                // 中序遍历，最后遍历右节点，所以右节点最先放入栈
                if (temp->right)
                {
                    st.push(temp->right);
                }

                st.push(temp); // 放入中间节点吧
                // 这里由于中间节点的判断条件是null，这里插入一个null表明获取到中间节点
                st.push(nullptr);
                // 放入左节点
                if (temp->left)
                {
                    st.push(temp->left);
                }
            }
            else
            {
                st.pop();        // 移除空节点
                temp = st.top(); // 获取当前节点
                result.push_back(temp->val);
                st.pop(); // 遍历完节点后进行删除
            }
        }
        return result;
    }
};
// @lc code=end
