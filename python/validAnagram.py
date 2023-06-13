class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): return False
        dict1 = {}
        dict2 = {}
        for char in s: dict1[char] = 0 if not char in dict1 else dict1[char] + 1
        for char in t: dict2[char] = 0 if not char in dict2 else dict2[char] + 1
        for key in dict1.keys(): 
            if key not in dict2 or dict1[key] != dict2[key]: return False
        return True