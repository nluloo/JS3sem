let user = {
    firstName: "Кирилл",
    lastName: "Сегренёв",

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        [this.firstName, this.lastName] = value.split(" ");
    }
}


console.log(user.fullName);

user.fullName = "Денис Мамонько";

console.log(user.fullName);