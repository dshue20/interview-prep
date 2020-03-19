// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if 
// needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

var strStr = function(haystack, needle) {
    if (needle === "") return 0;
    for (let i=0; i <= haystack.length - needle.length; i++){
        if (haystack.slice(i, i + needle.length) === needle) return i;
    }
    return -1;
};