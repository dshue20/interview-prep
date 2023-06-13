class Solution:
    def isValid(self, str: str) -> bool:
        currTop = []
        counts = {'(': 0, '[': 0, '{': 0}
        for i in range(0, len(str)):
            curr = str[i]
            match curr:
                case '(':
                    currTop.append(curr)
                    counts['('] += 1
                case '[':
                    currTop.append(curr)
                    counts['['] += 1
                case '{':
                    currTop.append(curr)
                    counts['{'] += 1
                case ')':
                    if len(currTop) == 0 or currTop[-1] != '(':
                        return False
                    currTop.pop()
                    counts['('] -= 1
                case ']':
                    if len(currTop) == 0 or currTop[-1] != '[':
                        return False
                    currTop.pop()
                    counts['['] -= 1
                case '}':
                    if len(currTop) == 0 or currTop[-1] != '{':
                        return False
                    currTop.pop()
                    counts['{'] -= 1
        for ele in counts:
            if counts[ele] != 0:
                return False
        return len(currTop) == 0