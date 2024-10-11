let arr = [1, [1, 2, [3, 4]], [2, 4]];

let flattenedArray = arr.reduce((acc, curr) => {
  if (Array.isArray(curr)) {
    return acc.concat(curr.flat());
  } else {
    return acc.concat(curr);
  }
}, []);

console.log(flattenedArray);
