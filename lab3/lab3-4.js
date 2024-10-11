let str = "ABC";
let total1 = "";

for(let i = 0; i < str.length; i++){
    total1 += str.charCodeAt(i);
}

console.log(total1);


let total2 = total1.replace(/7/g, '1');
console.log(parseInt(total1) - parseInt(total2));