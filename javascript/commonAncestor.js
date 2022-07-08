class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function commonAncestor(root, node1, node2) {
  let seen = 0;
  let leftNum = 0;
  let rightNum = 0;
  let leftAncestor;
  let rightAncestor;
  if (root.val === node1.val || root.val === node2.val) seen = 1;
  if (root.left)
    [leftNum, leftAncestor] = commonAncestor(root.left, node1, node2);
  if (root.right)
    [rightNum, rightAncestor] = commonAncestor(root.right, node1, node2);
  if (leftNum === 2) return [2, leftAncestor];
  if (rightNum === 2) return [2, rightAncestor];
  if (seen + leftNum + rightNum === 2) return [2, root];
  return [seen + leftNum + rightNum, null];
}

let two = new TreeNode(2);
let one = new TreeNode(1);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);
let six = new TreeNode(6);
two.left = one;
two.right = three;
three.left = four;
three.right = five;

console.log(commonAncestor(two, one, six));
