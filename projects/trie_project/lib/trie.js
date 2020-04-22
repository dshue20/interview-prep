class Node {
    constructor(){
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
   constructor(){
       this.root = new Node();
   }

    insertRecur(word, root=this.root){
        if (!word.length) return;
        let letter = word[0];
        let node = root.children[letter];
        if (!node) {
            node = new Node()
            root.children[letter] = node;
        }
        if (word.length === 1) node.isTerminal = true;
        this.insertRecur(word.slice(1), node);
    }

    insertIter(word){
        let root = this.root;
        let node;
        for (let i=0; i < word.length; i++){
            node = root.children[word[i]];
            if (!node) {
                node = new Node();
                root.children[word[i]] = node;
            };
            root = node;
        }
        node.isTerminal = true;
    }

    searchRecur(word, root=this.root){
        if (!word.length) return false;
        let letter = word[0];
        if (root.children[letter]){
            if (word.length === 1 && root.children[letter].isTerminal){
                return true;
            } else {
                return this.searchRecur(word.slice(1), root.children[letter]);
            }
        } else {
            return false;
        };
    }

    searchIter(word){
        let root = this.root;
        let node;
        for (let i=0; i < word.length; i++){
            node = root.children[word[i]];
            if (node){
                if (i === word.length - 1 && node.isTerminal){
                    return true;
                } else {
                    root = node;
                }
            } else {
                return false;
            }
        };
        return false;
    }

    wordsWithPrefix(prefix){
        let root = this.root;
        let letter;
        let node;
        for (let i=0; i < prefix.length; i++){
            letter = prefix[i];
            let node = root.children[letter];
            if (!node) return [];
            root = node;
        };
        const words = [];
        let word;
        while (Object.keys(root.children).length){
            
        }
    }
}

module.exports = {
    Node,
    Trie
};