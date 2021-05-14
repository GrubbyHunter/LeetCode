#include <vector>

using namespace std;
/*
 * @lc app=leetcode.cn id=108 lang=cpp
 *
 * [108] 将有序数组转换为二叉搜索树
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
    TreeNode *sortedArrayToBST(vector<int> &nums)
    {
        if (nums.size() == 0)
        {
            return nullptr;
        }

        if (nums.size() == 1)
        {
            return new TreeNode(nums[0]);
        }
        int size = nums.size();
        int middle = size / 2;

        vector<int> left(nums.begin(), nums.begin() + middle);
        // +1过滤掉middle节点
        vector<int> right(nums.begin() + middle + 1, nums.end());

        return new TreeNode(nums[middle], sortedArrayToBST(left), sortedArrayToBST(right));
    }
};
// @lc code=end
