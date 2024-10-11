let list_products = new Set(["яблоки", "груши", "бананы"]);


function Add_To_Set(str){
    let string = str.toLowerCase();
    list_products.add(string);
}

function Del_Elem_Set(str){
    let string = str.toLowerCase();
    list_products.delete(string)
}

function Search_Elem_Set(str){
    let string = str.toLowerCase();
    if(list_products.has(string)){
        console.log("Данный товар есть в списке");
        return true;
    } 
    else{
        console.log("Данного товара нет в списке");
        return false;
    }


}
Add_To_Set("Мандарины");


Add_To_Set("Арбуз");

console.log(list_products);



Search_Elem_Set("арбуз");

console.log(list_products);

let h = "Количество товаров списке: " + list_products.size

console.log(h);