function makeCounter(){ // [[Enviroment]] -- содержит ссылку на глобальное окружение window
    let currentCount = 1;
    return function(){// [[Enviroment]] -- содержит ссылку на makeCounter окружение
    return currentCount++;
    }
}


let counter = makeCounter();

alert(counter());
alert(counter());
alert(counter());

let counter2 = makeCounter();
alert(counter2()); 