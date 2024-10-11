let products = new Map();

function Add_Product_To_Map(id, name, count, price){
    products.set(id, {name, count, price});
}



function Del_Product(numberID){
    products.delete(numberID);
}


function Del_Product_Name(name){
    for(let [key, value] of products){
        if(value.name === name){
            products.delete(key);
            return;
        }
    }
}

function Change_Count_All_Product(){
    products.forEach((value, key, map) => {
        let count = prompt("Введите количество " + value.name + " под " + key + " id");
        value.count = +count;
    });
}



function Change_Price_All_Product(){
    products.forEach((value, key, map) => {
        let price = prompt("Введите цену для " + value.name + " под " + key + " id");
        value.price = +price;
    });
}


function counts(){
    let count = 0;
    for(let [key,value] of products){
        count += value.count;
    }

    console.log("Количество позиций: " + count)
    return count;
}

function Price_All(){
    let sum = 0;
    for(let [key,value] of products){
        sum += value.count * value.price;
    }

    console.log("Цена за все позиции: " + sum)
    return sum;
}



Add_Product_To_Map(10, "Морковь", 5, 100);
Add_Product_To_Map(15, "Свекла", 5, 100);
Add_Product_To_Map(150, "Свекла", 5, 100);
Add_Product_To_Map(20, "Картошка", 5, 100);
Add_Product_To_Map(50, "Помидор", 5, 100);
Add_Product_To_Map(40, "Огурец", 5, 100);
console.log(products);

Del_Product_Name("Свекла");
Change_Count_All_Product()
Change_Price_All_Product()
counts();
Price_All();
console.log(products);
