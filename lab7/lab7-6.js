let item = {
    price: 100,
    /* дескриптор свойства:
{
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
}

Object.defineProperty(item, "price", {
    writable: false,
    configurable: false
})


item.price = 1000;
delete item.price;

console.log(Object.getOwnPropertyDescriptors(item));
