let numbers = [1,2,3];


Object.defineProperty(numbers, "sum", {
    get(){
        return this.reduce((acc, curr) => acc + curr, 0);
    },
    configurable: false, // Нельзя удалить
    enumerable: false,   // Не будет видимо в перечислении свойств
    //   "writable": false - выдает ошибку, наверное потому что нет данного свойства ваааще дизлайк кринж(
});


console.log(numbers.sum);
console.log(numbers);
console.log(Object.getOwnPropertyDescriptors(numbers));