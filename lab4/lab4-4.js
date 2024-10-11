let cashe = new WeakMap();

function cashe_func(input){
    if(cashe.has(input)){
        console.log("Значение было взято из кэша");
        return cashe.get(input);
    }

    const result = (input.key+ 17) * 23;
    cashe.set(input, result);

    return result;
}

const input1 = {key: 5};

console.log(cashe_func(input1));
console.log(cashe_func(input1));

