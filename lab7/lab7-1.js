let person = {
    name: "Кирилл",
    years: 18,
    greet(){
        console.log(`Привет, ${this.name}!`);
    },
    ageAfterYears(year){
        console.log("Текущий возраст: " + this.years);
        result = this.years + year;
        return result;
    }
}

person.greet();

console.log(`Ваш возраст будет: ${person.ageAfterYears(10)}`);


