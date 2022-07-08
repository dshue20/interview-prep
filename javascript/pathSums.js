class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const pathsWithSums = (root, sum, seen = new Set()) => {
  if (!root) return 0;
  let count = 0;
  if (root.val === sum) {
    count++;
  }
  if (
    root.right &&
    !seen.has(root.right.val.toString() + '-' + sum.toString())
  ) {
    count += pathsWithSums(root.right, sum, seen);
    seen.add(root.right.val.toString() + '-' + sum.toString());
  }
  if (root.left && !seen.has(root.left.val.toString() + '-' + sum.toString())) {
    count += pathsWithSums(root.left, sum, seen);
    seen.add(root.left.val.toString() + '-' + sum.toString());
  }
  if (
    root.right &&
    !seen.has(root.right.val.toString() + '-' + (sum - root.val).toString())
  ) {
    count += pathsWithSums(root.right, sum - root.val, seen);
    seen.add(root.right.val.toString() + '-' + (sum - root.val).toString());
  }
  if (
    root.left &&
    !seen.has(root.left.val.toString() + '-' + (sum - root.val).toString())
  ) {
    count += pathsWithSums(root.left, sum - root.val, seen);
    seen.add(root.left.val.toString() + '-' + (sum - root.val).toString());
  }
  return count;
};

let two = new TreeNode(2);
let one = new TreeNode(1);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);
let six = new TreeNode(6);
let zero = new TreeNode(0);
let nfive = new TreeNode(-5);

five.left = three;
three.left = two;
three.right = four;
two.left = zero;
zero.left = nfive;
five.right = six;

console.log(pathsWithSums(five, 5)); // [5, 3+2, 3+2+0, 5+3+2+0+(-5)]
