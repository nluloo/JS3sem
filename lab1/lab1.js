
let a = 5; // number
let name = "Name" // string
let i = 0; // number
let double = 0.23; // number
let result = 1/0; // undefined
let answer = true; // boolean
let no = null; // null

function square(){
let a = 45
let b = 21
let c = 5

let sq = (a*b)/(c*c)
return sq
}


console.log(Math.trunc(square()));

function srv(){
    let i = 2;
    let a = ++i;
    let b = i++;

    return Boolean((a++ < ++b));
}
console.log(srv());

function word(){
    const kotKot = 'Котик' > 'котик' ? 'Ураааа!!))' : 'Не урааа((('
    console.log(kotKot);
    var kotKit = 'Котик' > 'китик' ? 'Ураааа!!))' : 'Не урааа((('
    console.log(kotKit);
    kotKit = 'Котик' > 'Кот' ? 'Ураааа!!))' : 'Не урааа((('
    console.log(kotKit);
    kotKit = 'Привет' > 'Пока' ? 'Ураааа!!))' : 'Не урааа((('
    console.log(kotKit);
    kotKit = 73 > '53' ? 'Ураааа!!))' : 'Не урааа((('
    console.log(kotKit);
    kotKit = false > '0' ? 'Ураааа!!))' : 'Не урааа((('
    console.log(kotKit);
    kotKit = 54 > true ? 'Ураааа!!))' : 'Не урааа((('
    console.log(kotKit);
    kotKit = 123 > false ? 'Ураааа!!))' : 'Не урааа((('
    console.log(kotKit);
    kotKit = true > 3 ? 'Ураааа!!))' : 'Не урааа((('
    console.log(kotKit);
    kotKit = 3 > '5мм' ? 'Ураааа!!))' : 'Не урааа((('
    console.log(kotKit);
    kotKit = 8 > '-2' ? 'Ураааа!!))' : 'Не урааа((('
    console.log(kotKit);
    kotKit = 34 == '34' ? 'Ураааа!!))' : 'Не урааа((('
    console.log(kotKit);
    const kitKit = null === undefined ? 'Ураааа!!))' : 'Не урааа((('
    console.log(kitKit);
}
word()

function namePrep(){
    let namee = prompt("Введите имя преподавателя:");
    let nameUP = "МАРИНА";
    let nameeUPP = namee.toUpperCase();
    console.log(nameeUPP);
    if(nameeUPP.includes(nameUP)){
        alert('Совпадение есть');
    }
    else{
        alert('Совпадения нет(');
    }
    console.log(namee);
}
namePrep();

function lessons(){
    let russian = true;
    let math = true;
    let eng = false;

    if(russian && math && eng){
        console.log('Вы переведены на след.курс');
    }
    else if(russian && math || russian && eng || math && eng){
        console.log("Пересдача");
    }
    else{
        console.log('Отчислен');
    }
}

lessons();