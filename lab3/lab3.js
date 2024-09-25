let arr = [1,[1,2,[3,4]], [2,4]]; // СДЕЛАТЬ С ПОМОЩЬЮ REDUCE
console.log(arr.flat(2));


let array = [1,2, [3,4,[5,6,[7,8]]]];


console.log(arr.reduce((acculator, current) => acculator + current));