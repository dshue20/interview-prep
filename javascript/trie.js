// Implement a trie with insert, search, and startsWith methods.

// Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");   
// trie.search("app");     // returns true
// Note:

// You may assume that all inputs are consist of lowercase letters a-z.
// All inputs are guaranteed to be non-empty strings.

/**
 * Initialize your data structure here.
 */
class Node{
    constructor(){
        this.children = {};
        this.isTerminal = false;
    }
}

var Trie = function() {
    this.root = new Node();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word, root=this.root) {
    let letter = word[0];
    if (!root.children[letter]) root.children[letter] = new Node();
    if (word.length === 1){
        root.children[letter].isTerminal = true;
        return;
    };
    this.insert(word.slice(1), root.children[letter]);
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word, root=this.root) {
    let letter = word[0];
    if (!root.children[letter]){
        return false;
    } else if (word.length == 1 && root.children[letter].isTerminal){
        return true;
    } else {
        return this.search(word.slice(1), root.children[letter])
    };
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix, root=this.root) {
    let letter = prefix[0];
    if (!root.children[letter]){
        return false;
    } else if (prefix.length == 1){
        return true;
    } else {
        return this.startsWith(prefix.slice(1), root.children[letter])
    };
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */