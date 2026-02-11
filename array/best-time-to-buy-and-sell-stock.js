/**
 * LeetCode #121 - Best Time to Buy and Sell Stock
 *
 * Topic: Array
 * Difficulty: Easy
 *
 * Problem:
 * You are given an array prices where prices[i] is the price of a given stock on the i-th day.
 * Choose a single day to buy one stock and a different day in the future to sell that stock.
 * Return the maximum profit. If no profit can be achieved, return 0.
 *
 * Requirements:
 * - Buy must occur before sell (sell day index > buy day index).
 * - At most one transaction (one buy, one sell).
 *
 * Constraints:
 * - 1 <= prices.length <= 10^5
 * - 0 <= prices[i] <= 10^4
 *
 * Examples:
 * - [7, 1, 5, 3, 6, 4] → 5 (buy at 1, sell at 6)
 * - [7, 6, 4, 3, 1]    → 0 (no profit possible)
 *
 * Approach (brute force):
 * - Initialize maxProfit to 0.
 * - Outer loop i (buy day), inner loop j from i+1 (sell day).
 * - For each pair (i, j), profit = prices[j] - prices[i]; update maxProfit if greater.
 *
 * Dry run (prices = [7, 1, 5, 3, 6, 4]):
 * - i=0 (7): j=1..5 → all profits negative; maxProfit stays 0.
 * - i=1 (1): j=2 → 5-1=4 → maxProfit=4; j=3 → 2; j=4 → 6-1=5 → maxProfit=5; j=5 → 3.
 * - i=2..4: no higher profit. Final maxProfit = 5.
 *
 * Time Complexity: O(n²) — two nested loops; total pairs n(n-1)/2
 * Space Complexity: O(1) — only variable maxProfit
 */

function maxProfit(prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > maxProfit) {
        maxProfit = prices[j] - prices[i];
      }
    }
  }

  return maxProfit;
}
