// Given an iterator of iterators, implement an interleaving iterator that takes in an iterator of iterators, and emits elements from the nested iterators in interleaved order. That is, if we had the iterators i and j iterating over the elements [ia, ib, ic] and [ja, jb] respectively, the order in which your interleaving iterator should emit the elements would be [ia, ja, ib, jb, ic].

// Your interleaving iterator should implement the Iterator interface, take in the iterator of iterators in its constructor, and provide the next and hasNext methods. Assume that there are no additional methods offered by the iterator.

function arrIterator(arr) {
  let nextIndex = 0;

  const rangeIterator = {
    next() {
      let result;
      // this.helloWorld();
      if (nextIndex < arr.length) {
        result = { value: arr[nextIndex], done: false };
        nextIndex++;
        return result;
      }
      return { value: 'done', done: true };
    },
    helloWorld() {
      console.log('yo');
    },
  };
  return rangeIterator;
}

function interleavingIterator(iteratorArr) {
  let currentIteratorIdx = 0;
  let checkArr = new Array(iteratorArr.length).fill(false);
  let result;
  let numIteratorsDone = 0;

  const output = {
    next() {
      result = iteratorArr[currentIteratorIdx].next();
      console.log('check: ', result, currentIteratorIdx);
      if (result.done) {
        // if one iterator is finished, go to the next one
        if (!checkArr[currentIteratorIdx]) numIteratorsDone++; // keep track if there are non-empty iterators
        checkArr[currentIteratorIdx] = true; // keep track which ones are empty
        // find next iterator with stuff in it
        let prevIdx = currentIteratorIdx;
        currentIteratorIdx =
          currentIteratorIdx === iteratorArr.length - 1
            ? 0
            : currentIteratorIdx + 1;
        while (checkArr[currentIteratorIdx] && currentIteratorIdx !== prevIdx) {
          currentIteratorIdx =
            currentIteratorIdx === iteratorArr.length - 1
              ? 0
              : currentIteratorIdx + 1;
        }
        result = iteratorArr[currentIteratorIdx].next();
        console.log('WUT: ', result, currentIteratorIdx);
      } else {
        if (currentIteratorIdx === iteratorArr.length - 1) {
          currentIteratorIdx = 0;
        } else {
          currentIteratorIdx++;
        }
        console.log('INDEX: ', currentIteratorIdx);
      }
      if (result.done && numIteratorsDone < checkArr.length) {
        return this.next(); // circle back again to find a non-empty iterator
      } else {
        return result;
      }
    },
    hasNext() {
      return !result.done;
    },
  };

  return output;
}

const iterator = arrIterator([1, 2, 3]);
const iterator2 = arrIterator([4, 5, 6, 7]);
const iterator3 = arrIterator([8]);
const interleaving = interleavingIterator([iterator, iterator2, iterator3]);
let result = interleaving.next();

while (!result.done) {
  // console.log('has next: ', interleaving.hasNext());
  console.log('val: ', result.value);
  result = interleaving.next();
}

// 1, 4, 8, 2, 5, 3, 6, 7
