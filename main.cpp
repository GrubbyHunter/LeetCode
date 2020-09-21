#include <iostream>
#include <unordered_set>
#include <vector>
#include <math.h>
#include <climits>

using namespace std;

class Solution
{
public:
  int maxProfit(vector<int> &prices)
  {
    int minPrice = prices[0], sum = 0;
    for (int i = 1; i < prices.size(); i++)
    {
      if (prices[i] > minPrice)
      {
        sum += prices[i] - minPrice;
      }
      minPrice = prices[i];
    }

    return sum;
  }
};

int main()
{
  vector<int> result;
  result.push_back(0);
  result.push_back(1);
  result.push_back(0);
  result.push_back(3);
  result.push_back(12);
  Solution so;
  so.maxProfit(result);
  return 0;
}