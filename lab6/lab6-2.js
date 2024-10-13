let user = {
    name: "John",
    age: 18
}

let admin = {...user};
admin.admin = true;

console.log(user);
console.log(admin);