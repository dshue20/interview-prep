var twoSum = function(nums, target) {
    const length = nums.length;
    for (let i=0; i < length; i++){
        let firstNum = nums.shift();
        console.log(firstNum);
        console.log(nums);
        if (nums.includes(target - firstNum)) {
            console.log('hi');
            return [i, nums.indexOf(target - firstNum) + i + 1]
        }
        console.log('i: ', i)
    }
    return 'derek';
};

// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


//  * Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let node = new ListNode(null);
    let currentNode = node;
    let carry = 0;
    let p = l1;
    let q = l2;
    while (p || q){
        let x = p.val ? p.val : 0;
        let y = q.val ? q.val : 0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        let nextNode = new ListNode(sum % 10);
        currentNode.next = nextNode;
        currentNode = nextNode;
        p = p.next;
        q = q.next;
    }
    if (carry === 1) currentNode.next = new ListNode(1);
    return node.next;
};

// const l1 = new ListNode(2);
// l1.next = new ListNode(4);
// l1.next.next = new ListNode(3);

// const l2 = new ListNode(5);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);

// console.log(addTwoNumbers(l1, l2));

const mergeSort = arr => {
    if (arr.length <= 1) return arr;
    const midIdx = Math.floor(arr.length/2);
    const left = arr.slice(0,midIdx);
    const right = arr.slice(midIdx);
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
}

const merge = (left, right) => {
    let merged = [];
    while (left.length || right.length){
        if (!left.length){
            merged = merged.concat(right);
            break;
        } else if (!right.length){
            merged = merged.concat(left);
            break;
        } else {
            merged.push(left[0] < right[0] ? left.shift() : right.shift())
        }
    };
    return merged;
}

// console.log(mergeSort([5,2,7,12,1,3]))

const quickSort = arr => {
    if (arr.length <=1 ) return arr;
    let sorted = [];
    let left = [];
    let right = [];
    const pivot = arr[0];
    for (i=1; i<arr.length; i++){
        if (arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    };
    return [...quickSort(left), pivot, quickSort(right)]
}

// console.log(mergeSort([5,2,7,5,-1,12,1,3]))

const radixSort = arr => {
    const maxValue = Math.max(...arr);
    const maxDigits = Math.log(maxValue) / Math.log(10);
    let buckets = new Array(arr.length);
}

function binarySearch(arr, target){
    if (!arr.length) return false;
    const midIdx = Math.floor(arr.length/2);
    if (target < arr[midIdx]){
        return binarySearch(arr.slice(0,midIdx), target)
    } else if (target > arr[midIdx]){
        return binarySearch(arr.slice(midIdx+1), target)
    } else {
        return true;
    };
}

// console.log(binarySearch([5, 10, 12, 15, 20, 30, 70], 12));
// console.log(binarySearch([5, 10, 12, 15, 20, 30, 70], 24));

// Given a string, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(str) {
    let longest = str[0];
    let set = new Set();
    for (let i=0; i<str.length; i++){
        set.add(str[i]);
        if (str.length - i <= longest.length) return longest.length;
        for (let j=i+1; j<str.length; j++){
            if(set.has(str[j])){
                break;
            }else {
                set.add(str[j]);
                if (str.slice(i,j+1).length > longest.length) longest = str.slice(i,j+1);
                console.log(j);
                console.log(longest);
            }
        }
    }
};

// console.log(lengthOfLongestSubstring("abcabcbb"));

// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be 
// O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

var findMedianSortedArrays = function(nums1, nums2) {
    let midIdx;
    let which;
    let smallest;
    if ((nums1.length + nums2.length) % 2 === 1){
        midIdx = Math.floor((nums1.length + nums2.length) / 2);
        which = "odd";
    } else {
        midIdx = ((nums1.length + nums2.length) / 2) - 1;
        which = "even";
    };
    while (midIdx >= 0){
        let min = !nums2.length || nums1[0] < nums2[0] ? 1 : 2;
        smallest = min === 1 ? nums1.shift() : nums2.shift();
        midIdx--;
    }
    if (which === "odd"){
        return smallest;
    } else {
        let min = !nums2.length || nums1[0] < nums2[0] ? nums1[0] : nums2[0];
        return (smallest + min) / 2;
    }
};

// console.log(findMedianSortedArrays([1,3],[2]));
// console.log(findMedianSortedArrays([1,2],[3,4]));

// Implement atoi which converts a string to an integer.

// The function first discards as many whitespace characters as necessary until the first
// non-whitespace character is found. Then, starting from this character, takes an optional 
// initial plus or minus sign followed by as many numerical digits as possible, and interprets 
// them as a numerical value.

// The string can contain additional characters after those that form the integral number, 
// which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number, 
// or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned.

// Note:

// Only the space character ' ' is considered as whitespace character.
// Assume we are dealing with an environment which could only store integers within the 
// 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range 
// of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.

// Example 1:

// Input: "42"
// Output: 42
// Example 2:

// Input: "   -42"
// Output: -42
// Explanation: The first non-whitespace character is '-', which is the minus sign.
//              Then take as many numerical digits as possible, which gets 42.
// Example 3:

// Input: "4193 with words"
// Output: 4193
// Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
// Example 4:

// Input: "words and 987"
// Output: 0
// Explanation: The first non-whitespace character is 'w', which is not a numerical 
//              digit or a +/- sign. Therefore no valid conversion could be performed.
// Example 5:

// Input: "-91283472332"
// Output: -2147483648
// Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
//              Thefore INT_MIN (−231) is returned.

var myAtoi = function(str) {
    intStr = "";
    for (let i=0; i<str.length; i++){
        if (str[i] === " " || (str[i] === "0" && (!intStr.length || intStr === "+" || intStr === "-"))){
            continue;
        } else if (!parseInt(str[i]) && str[i] !== "+" && str[i] !== "-" & str[i] !== "0") {
            break;
        } else {
            if ((str[i] === "+" || str[i] === "-") && intStr.length) break;
            intStr += str[i];
        }
    }
    let sign;
    if (intStr[0] === "+"|| intStr[0] === "-"){
        if (intStr.length === 1 || !parseInt(intStr[1])) return 0;
        sign = intStr[0];
        let int = parseInt(intStr.slice(1));
        if (int > 2**31) return sign === "+" ? 2**31 : 2**31 * -1;
        return sign === "-" ? int * -1 : int;
    } else {
        if (!intStr.length) return 0;
        return parseInt(intStr) > 2**31 ? 2 ** 31 : parseInt(intStr);
    }
};

// Given an input string (s) and a pattern (p), implement regular expression matching with 
// support for '.' and '*'.

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Note:

// s could be empty and contains only lowercase letters a-z.
// p could be empty and contains only lowercase letters a-z, and characters like . or *.
// Example 1:

// Input:
// s = "aa"
// p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input:
// s = "aa"
// p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input:
// s = "ab"
// p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".
// Example 4:

// Input:
// s = "aab"
// p = "c*a*b"
// Output: true
// Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
// Example 5:

// Input:
// s = "mississippi"
// p = "mis*is*p*."
// Output: false

var isMatch = function(str, p) {
    let strIdx = 0, pIdx = 0;
    while (strIdx != str.length && pIdx != p.length){
        if (p[pIdx + 1] === "*"){
            if (p[pIdx] === ".") {
                if (pIdx === p.length - 2){
                    return true;
                } else {
                    let next = p[pIdx + 2];
                    if (str[strIdx] === next){
                        pIdx += 3;
                    }
                    strIdx++;
                }
            } else if (str[strIdx] === p[pIdx]){
                strIdx++;
                console.log(strIdx, pIdx);
                if (pIdx === p.length - 2 && strIdx === str.length) return true;
            } else {
                pIdx += 2;
            }
        } else if (p[pIdx] === "." || p[pIdx] === str[strIdx]){
            strIdx++;
            pIdx++;
        } else {
            return false;
        }
    };
    if (strIdx != str.length || pIdx != p.length) return false;
    return true;
};

// console.log(isMatch("aa", "a*"));

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together.
// Twelve is written as, XII, which is simply X + II. The number twenty seven is written 
// as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, 
// the numeral for four is not IIII. Instead, the number four is written as IV. Because 
// the one is before the five we subtract it making four. The same principle applies to 
// the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral. Input is guaranteed to be within the 
// range from 1 to 3999.

var intToRoman = function(num) {
    roman = "";
    while (num > 0){
        if (num >= 1000){
            roman += "M";
            num -= 1000;
        } else if (num >= 900){
            roman += "CM";
            num -= 900;
        } else if (num >= 500){
            roman += "D";
            num -= 500;
        } else if (num >= 400){
            roman += "CD";
            num -= 400;
        } else if (num >= 100){
            roman += "C";
            num -= 100;
        } else if (num >= 90){
            roman += "XC";
            num -= 90;
        } else if (num >= 50){
            roman += "L";
            num -= 50;
        } else if (num >= 40){
            roman += "XL";
            num -= 40;
        } else if (num >= 10){
            roman += "X";
            num -= 10;
        } else if (num >= 9){
            roman += "IX";
            num -= 9;
        } else if (num >= 5){
            roman += "V";
            num -= 5;
        } else if (num >= 4){
            roman += "IV";
            num -= 4;
        } else if (num >= 1){
            roman += "I";
            num -= 1;
        }
    }
    return roman;
};

// Given an array nums of n integers, are there elements a, b, c in nums such that 
// a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

var twoSum = function(nums, target){
    let arr = [];
    for (let i=0; i<nums.length; i++){
        let spliced = [...nums];
        spliced.splice(i,1);
        if (spliced.includes(target - nums[i])){
            toPush = [nums[i], target - nums[i]].sort((x,y) => x-y);
            already = false;
            arr.forEach(subarr => {
                if (JSON.stringify(subarr) === JSON.stringify(toPush)) already = true;
            });
            if (!already) arr.push(toPush);
        }
    }
    return arr;
}

var threeSum = function(nums) {
    let arr = [];
    for (let i=0; i<nums.length; i++){
        let spliced = [...nums]
        spliced.splice(i,1);
        let twos = twoSum(spliced, 0 - nums[i]);
        // console.log(spliced, twos);
        if (twos.length){
            twos.map(subarr => {
                subarr.push(nums[i]);
                return subarr.sort((x,y) => x-y);
            })
        }
        twos.forEach(subtwo => {
            let already = false;
            for (let subarr of arr) {
                if (JSON.stringify(subarr) === JSON.stringify(subtwo)){
                    already = true;
                    break;
                }
            }
            if (!already) arr.push(subtwo);
        })
    }
    return arr;
};

// console.log(twoSum([-1,0,0,1], 0));
// console.log(threeSum([-1,0,1,2,-1,-4]));