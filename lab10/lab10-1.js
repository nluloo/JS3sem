const set = new Set([1,1,2,3,4]);

console.log(set);


//3

const name = "Lydia"; //константы в JavaScript являются неизменяемыми (immutable) и их нельзя изменять или удалять после объявления
age = 21; // Неявно объявленные переменные можно удалять с помощью delete
 
console.log(delete name);
console.log(delete age);


//4
const numbers = [1,2,3,4,5];
const [y] = numbers; // тоже самое, что и const y = numbers[0] | деструктуризация

console.log(y);


//5 
const user = {name : "Lydia", age: 21}; // использование spread оператора
const admin = {admin: true, ...user}


console.log(admin);


//6 
const person = {name: "Lydia"};

Object.defineProperty(person, "age", {value: 21});

console.log(Object.getOwnPropertyDescriptors(person)); // Т.к по стандарту у нас все улетело в false из-за поля enumerable мы не можем вывести в keys все наши поля
console.log(Object.keys(person));

//7
const a = {};
const b = {key : "b"}; 
const c = {key: "c"};

console.log(b.toString());

a[b] = 123; // Когда мы так пишем, то в квадратных скобках вызывается метод b.toString() => вернет object Object, для c вернет тоже самое, поэтому ключ для данных значений будет object Object
a[c] = 456;

console.log(a[b]);


//8
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber(); // глобал
const num2 = increasePassedNumber(num1); // глобал

console.log(num1);
console.log(num2);

//9
const value = {number: 10};

const multiplay = (x = {...value}) => {
    console.log((x.number *= 2));
}

multiplay();
multiplay();
multiplay(value); // берется из глобал
multiplay(value);


//10
[1,2,3,4].reduce((x,y) => console.log(x,y));

// 1 2 |  und 3 | und 4 x - accur