// Implement the Array.prototype.map function in JavaScript.

Array.prototype.myMap = function(fn){
    const final = [];
    this.forEach(x => final.push(fn(x)));
    return final;
}