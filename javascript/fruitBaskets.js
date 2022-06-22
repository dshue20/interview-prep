// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

var totalFruit = function (fruits) {
  let startIdx = 0;
  let currIdx = 0;
  let maxFruits = 0;
  let currFruits = 0;
  let seenFirstIdx = false;
  let fruit1 = null;
  let fruit2 = null;
  let fruit2Idx;

  while (startIdx < fruits.length - 1 && currIdx < fruits.length) {
    console.log(startIdx, currIdx, currFruits, fruit1, fruit2);
    const fruit = fruits[currIdx];
    if (fruit1 === null) {
      fruit1 = fruit;
      currFruits++;
      currIdx++;
    } else if (fruit1 === fruit || fruit2 === fruit) {
      if (fruit2 && fruit === fruit1) seenFirstIdx = true;
      currFruits++;
      currIdx++;
    } else if (fruit2 === null) {
      fruit2 = fruit;
      fruit2Idx = currIdx;
      currFruits++;
      currIdx++;
    } else {
      // new tree
      if (currFruits > maxFruits) maxFruits = currFruits;
      startIdx = fruit2Idx;
      currIdx = fruit2Idx;
      currFruits = 0;
      seenFirstIdx = false;
      fruit1 = null;
      fruit2 = null;
    }
    console.log('huh', currIdx, fruits.length);
  }
  return Math.max(maxFruits, currFruits);
};

console.log(totalFruit([3, 6, 6, 6, 3, 6, 3]));
