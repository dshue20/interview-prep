// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (array.length < 2) return true;
    console.log('wut');
    while (idx < array.length){
        console.log(idx);
        let left = idx*2;
        let right = idx*2+1;
        if ((left < array.length && array[idx] < array[left]) || (right < array.length && array[idx] < array[right])) return false;
        idx++;
    };
    return true;
}


module.exports = {
    isMaxHeap
};