function basicOperation(operation, value1, value2){
 
    return eval(value1 + operation + value2);
}


let result = basicOperation('/', 10,5);

console.log(result);


function ex2(n){
    let sum = 0;
    for(var i = n; i > 0; i--){
        sum = sum + Math.pow(i,3);
    }
    return sum;
}

let res = ex2(10);
console.log(res);


function ex3(numbers){
    let sum = 0;
    numbers.forEach(element => {
        sum += element;
    });

    return sum/numbers.length;  

}

res = ex3([1,2,3,4,5]);
console.log(res);

function ex4(str){
    const re = /[A-Za-z]/g;

    const reversedStr = str.split('').reverse().join('');

    const filteredStr = reversedStr.match(re).join('');


    return filteredStr;
}

var strRes = ex4("JavaScr53э? ipt");
console.log(strRes)

function ex5(n, str){
    return str.repeat(n);
}

var str = ex5(6, "Hello");

console.log(str);


function ex6(arr1, arr2){
    let arr3 = "";
    var arrayStr = arr1.split(' ');
    var lengthArr1 = arrayStr.length;
    for(let i = 0; i < lengthArr1; i++ ){
        if(!arr2.includes(arrayStr[i])){
            arr3 += arrayStr[i];
            arr3 += ' ';
        }
    }
    return arr3;
}

var str = ex6("privet hello gggg", "gggg");

console.log(str);
