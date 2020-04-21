class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor(){
       this.root = null;
   }

   insert(val){
       if (!this.root){
           this.root = new TreeNode(val);
       } else {
           let root = this.root;
           while (true){
                if (val < root.val){
                    if (!root.left){
                        root.left = new TreeNode(val);
                        break;
                    } else {
                        root = root.left;
                    }
                } else {
                    if (!root.right){
                        root.right = new TreeNode(val);
                        break;
                    } else {
                        root = root.right;
                    }
                }
            }
       }
   }

   searchRecur(val, root=this.root){
       if (!root) return false;
       if (root.val === val) return true;
       return this.searchRecur(val, root.left) || this.searchRecur(val, root.right);
   }

   searchIter(val, root=this.root){
       while (root){
            if (val === root.val){
                return true;
            } else if (val < root.val){
                root = root.left;
            } else {
                root = root.right;
            }
       }
       return false;
   }
}

module.exports = {
    TreeNode,
    BST
};