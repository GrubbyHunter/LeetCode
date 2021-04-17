/*
 * @lc app=leetcode.cn id=150 lang=cpp
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
class Solution
{
public:
    int evalRPN(vector<string> &tokens)
    {
        stack<int> st;

        for (int i = 0; i < tokens.size(); i++)
        {
            if (tokens[i] != "+" && tokens[i] != "-" && tokens[i] != "*" && tokens[i] != "/")
            {
                st.push(atoi(tokens[i].c_str()));
                continue;
            }

            int num2 = st.top();
            st.pop();
            int num1 = st.top();
            st.pop();

            int result;
            if (tokens[i] == "+")
            {
                result = num1 + num2;
            }
            else if (tokens[i] == "-")
            {
                result = num1 - num2;
            }
            else if (tokens[i] == "*")
            {
                result = num1 * num2;
            }
            else
            {
                result = num1 / num2;
            }
            st.push(result);
        }

        return st.top();
    }
};
// @lc code=end
