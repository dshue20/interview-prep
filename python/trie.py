# A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

# Implement the Trie class:

# Trie() Initializes the trie object.
# void insert(String word) Inserts the string word into the trie.
# boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
# boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

class Node:
    def __init__(self, letter):
        self.letter = letter
        self.children = {}
        self.ends = False

class Trie:

    def __init__(self):
        self.root = Node('')

    def insert(self, word: str) -> None:
        curr = self.root
        for i in range(len(word)):
            letter = word[i]
            if letter not in curr.children:
                curr.children[letter] = Node(letter)
            curr = curr.children[letter]
        curr.ends = True

    def search(self, word: str) -> bool:
        curr = self.root
        for i in range(len(word)):
            letter = word[i]
            if letter not in curr.children:
                return False
            curr = curr.children[letter]
        return True if curr.ends else False

    def startsWith(self, prefix: str) -> bool:
        curr = self.root
        for i in range(len(prefix)):
            letter = prefix[i]
            if letter not in curr.children:
                return False
            curr = curr.children[letter]
        return True


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)