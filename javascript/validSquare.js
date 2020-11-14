// Given the coordinates of four points in 2D space p1, p2, p3 and p4, return true if the four points construct a square.

// The coordinate of a point pi is represented as [xi, yi]. The input is not given in any order.

// A valid square has four equal sides with positive length and four equal angles (90-degree angles).

 

// Example 1:

// Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
// Output: true
// Example 2:

// Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
// Output: false
// Example 3:

// Input: p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
// Output: true
 

// Constraints:

// p1.length == p2.length == p3.length == p4.length == 2
// -104 <= xi, yi <= 104

var validSquare = function(p1, p2, p3, p4) {
  const points = [p1, p2, p3, p4];
  let set = new Set();
  for (let i=0; i <= 2; i++){
      for (let j=i+1; j <=3; j++){
          let dist = distance(points[i], points[j]);
          if (!dist) return false;
          set.add(dist);
      }
  }
  return set.size === 2;
};

var distance = function(p1, p2){
  const res = ((p2[0] - p1[0])**2 + (p2[1] - p1[1])**2)**0.5;
  return res;
}