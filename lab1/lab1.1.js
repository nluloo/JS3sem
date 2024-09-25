let tr = true + true;
console.log(tr);
let nn = 0 + '5';
console.log(nn);
let nm = 5 + 'мм';
console.log(nm);
let un = 8/Infinity;
console.log(un);
let n = 9 * "\n9";
console.log(n);
let nl = null - 1;
console.log(nl);
let ns = "5" - 2
console.log(ns);
let npx = "5px" - 3;
console.log(npx);
let bn = true - 3;
console.log(bn);
let nnn = 7 || 0;
console.log(nnn);

function ex8(){
    for(let i = 1; i <= 10; i++){
        if(i % 2 == 0){
            console.log(i + 2);
        }
        else{
            console.log(i + 'мм');
        }
    }
}
ex8();


function ex9(number){
    let days = {
        1 : "Понедельник",
        2 : "Вторник",
        3 : "Среда", 
        4 : "Четверг",
        5 : "Пятница",
        6 : "Суббота",
        7 : "Воскресенье"
    }
    switch(+number){ // Нужно приводить к числовому, т.к при вводе через prompt тип данных string
        case 1:
        alert(days[1]);
        break;
        case 2:
        alert(days[2]);
        break;
        case 3:
        alert(days[3]);
        break;
        case 4:
        alert(days[4]);
        break;
        case 5:
        alert(days[5]);
        break;
        case 6:
        alert(days[6]);
        break;
        case 7:
        alert(days[7]);
        break;
        default:
            alert('Такого дня недели нет(');
    }
}
let number = prompt('Введите цифру');
ex9(number);


function ex_9_1(number){
    let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    switch(+number){ // Нужно приводить к числовому, т.к при вводе через prompt тип данных string
        case 1:
        alert(days[0]);
        break;
        case 2:
        alert(days[1]);
        break;
        case 3:
        alert(days[2]);
        break;
        case 4:
        alert(days[3]);
        break;
        case 5:
        alert(days[4]);
        break;
        case 6:
        alert(days[5]);
        break;
        case 7:
        alert(days[6]);
        break;
        default:
            alert('Такого дня недели нет(');
}
}
number = prompt('Введите цифру');
ex_9_1(number);