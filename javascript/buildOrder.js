const constructAdjList = (deps) => {
  // assume deps is list of tuples
  let list = {};
  for (let dep of deps) {
    if (!list[dep[0]]) {
      list[dep[0]] = [dep[1]];
    } else {
      list[dep[0]].push(dep[1]);
    }
  }
  return list;
};

const dfs = (node, adjList, visited = new Set()) => {
  if (visited.has(node)) return [];
  visited.add(node);
  let answer = [];
  if (adjList[node]) {
    for (let neighbor of adjList[node]) {
      if (!visited.has(neighbor)) {
        answer = answer.concat(dfs(neighbor, adjList, visited));
      }
    }
  }
  answer.push(node);
  return answer;
};

const dfsAll = (projects, adjList, visited = new Set()) => {
  let answer = [];
  for (let project of projects) {
    visited.add(project);
    if (adjList[project]) {
      for (let neighbor of adjList[project]) {
        if (!visited.has(neighbor)) {
          answer = answer.concat(dfs(neighbor, adjList, visited));
        }
      }
    }
    answer.push(project);
  }
  return answer;
};

const buildOrder = (projects, deps) => {
  const adjList = constructAdjList(deps);
  let answer = [];
  let visited = new Set();
  for (let project of projects) {
    let toAdd = dfs(project, adjList, visited);
    for (let ele of toAdd) {
      answer.push(ele);
      visited.add(ele);
    }
  }
  return answer;
};

let adjList = constructAdjList([
  ['d', 'a'],
  ['b', 'f'],
  ['d', 'b'],
  ['a', 'f'],
  ['c', 'd'],
]);

// console.log('adjList: ', adjList);
console.log('dfs: ', dfs('d', adjList));
// console.log('dfsAll: ', dfsAll(['a', 'b', 'c', 'd', 'e', 'f'], adjList));

console.log(
  'buildOrder: ',
  buildOrder(
    ['a', 'b', 'c', 'd', 'e', 'f'],
    [
      ['d', 'a'],
      ['b', 'f'],
      ['d', 'b'],
      ['a', 'f'],
      ['c', 'd'],
    ]
  )
);
