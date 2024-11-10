function Book(name, author){
    this.name = name;
    this.author = author;
};

let book1 = new Book("451 градус по фаренгету", "Рей Бредбери");
let book2 = new Book("Мартин Иден", "Джек Лондон");

console.log(book1, book2);
