// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

var merge = function (intervals) {
  if (intervals.length < 2) return intervals;
  intervals.sort((x, y) => x[0] - y[0]);
  let answer = [];
  let idx = 0;
  let curr = intervals[idx];
  while (idx < intervals.length - 1) {
    if (intervals[idx + 1][0] <= curr[1]) {
      curr = [curr[0], Math.max(curr[1], intervals[idx + 1][1])];
      if (idx === intervals.length - 2) answer.push(curr);
    } else {
      answer.push(curr);
      curr = intervals[idx + 1];
      if (idx === intervals.length - 2) answer.push(intervals[idx + 1]);
    }
    idx++;
  }
  return answer;
};
