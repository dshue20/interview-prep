function merge(array1, array2) {
    let arr = [];
    while (array1.length && array2.length){
        array1[0] < array2[0] ? arr.push(array1.shift()) : arr.push(array2.shift());
    };
    arr = arr.concat(array1);
    arr = arr.concat(array2);
    return arr;
}

function mergeSort(array) {
    if (array.length <= 1) return array;
    const left = array.slice(0,Math.floor(array.length/2));
    const right = array.slice(Math.floor(array.length/2));
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
}

// console.log(mergeSort([2, -1, 4, 3, 7, 3]));

module.exports = {
    merge,
    mergeSort
};