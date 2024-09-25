let writeUser = prompt('Введите любую строку');
function ex10(a = 'Привет ', b, c){
    let name = a + b + c;
    console.log(name);
}
ex10(5, 5, writeUser);



function square(a, b){ // Expression
    if( +a === +b ){
        alert(a*4);
    }
    else{
        alert(a*b);
    }
}

let a = 5
let b = 6
let sum = function(a,b){ // Declaration
    if( +a === +b ){
        alert(a*4);
    }
    else{
        alert(a*b);
    }
};



let ex11 = (a == b) ? // bow
    () => alert(a*4) :
    () => alert(a*b);

    console.log(ex11(5,6));