class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        low = float('inf')
        high = 0
        diff = 0
        for price in prices:
            if price < low:
                low = price
                high = 0
            if price > high: high = price
            if high - low > diff: diff = high - low
        return diff