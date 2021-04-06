#include <vector>

// 命名空间，有命名空间才能使用std下的全局变量
using namespace std;
/*
 * @lc app=leetcode.cn id=59 lang=cpp
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
class Solution
{
public:
    vector<vector<int>> generateMatrix(int n)
    {
        // 初始化二维数组
        vector<vector<int>> result(n, vector<int>(n, 0));

        int startX = 0;   // 填充的起始横向位置
        int startY = 0;   // 填充的起始竖向位置
        int loop = n / 2; // 需要填充的圈数，例如 n = 3，则只需要填充一圈
        int mid = n / 2;  // 中点的坐标[mid,mid]
        int current = 1;  // 当前值，从1开始
        int offset = 1;   // 每一圈循环，需要控制每一条边遍历的长度

        int i, j;
        // loop > 0 为循环不变量，只有还有剩余圈数，则表明填充依然能进行下去
        while (loop > 0)
        {
            i = startX;
            j = startY;

            // 从左到右填充最上边，最后一个元素不填充
            // startY + n = 需要填充的边长度 [起始位置startY，结束位置startY + n]
            for (j = startY; j < startY + n - offset; j++)
            {
                result[i][j] = current++; // 这里使用current++是为了先赋值，在进行递增
            }

            // 从右上到右下填充最右边，最后一个元素不填充
            for (i = startX; i < startX + n - offset; i++)
            {
                result[i][j] = current++;
            }

            // 从右下到左下填充最下边，最后一个元素不填充
            // 此时startY在之前的遍历中已经达到最大，所以for循环第一个条件不需要赋值，只需要递减startY即可
            for (; j > startY; j--)
            {
                result[i][j] = current++;
            }

            // 从左下到左上填充最左边，最后一个元素不填充
            for (; i > startX; i--)
            {
                result[i][j] = current++;
            }

            startX++;
            startY++;
            // 填充完一圈之后offset+2，因为首尾和上下分别去掉了2个元素
            offset += 2;
            // 填充完一圈之后loop减少
            loop--;
        }

        // 如果n不为偶数，则正中心的终点，需要单独处理处理
        if (n % 2 != 0)
        {
            result[mid][mid] = current;
        }

        return result;
    }
};
// @lc code=end
