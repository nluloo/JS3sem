class Human{
    constructor(name, lastName, birth, adress){
        this.name = name;
        this.lastName = lastName;
        this.birth = birth;
        this.adress = adress;
        
    }

    get age(){
        const today = new Date();
        const birthDateObj = new Date(
          parseInt(this.birth.substr(0, 4)),
          parseInt(this.birth.substr(4, 2)) - 1,
          parseInt(this.birth.substr(6))
        );
        let age = today.getFullYear() - birthDateObj.getFullYear();

        if (
            today.getMonth() < birthDateObj.getMonth() ||
            (today.getMonth() === birthDateObj.getMonth() && today.getDate() < birthDateObj.getDate())
          ) {
            age--;
          }

        return age;
    }
    set age (birthDate) {
        const today = new Date();
        const birthDateObj = new Date(
          parseInt(birthDate.substr(0, 4)),
          parseInt(birthDate.substr(4, 2)) - 1,
          parseInt(birthDate.substr(6))
        );
      
        let age = today.getFullYear() - birthDateObj.getFullYear();
      
        if (
          today.getMonth() < birthDateObj.getMonth() ||
          (today.getMonth() === birthDateObj.getMonth() && today.getDate() < birthDateObj.getDate())
        ) {
          age--;
        }
      
        return age;
    }

    ChangAdress(adress){
        this.adress = adress;
        console.log(`Новый адрес ${this.name} - ${adress}`);
    }
}


class Student extends Human{
    constructor(name, lastName, birth, adress, faculti, term, group, number){
        super(name, lastName, birth, adress);
        this.faculti = faculti;
        this.term = term;
        this.group = group;
        this.number = number;
    }

    ChangeTerm(term){
        this.term = term;
        console.log(`Курс изменен на '${term}'`);
    }
    ChangeGroup(group){
        this.group = group;
        console.log(`Группа изменена на '${group}'`);
    }
    getFullName(){
        console.log(`${this.name} ${this.lastName}`);
    }
}


class Faculty{
    constructor(nameFaculty, numbersGroup){
        this.nameFaculty = nameFaculty;
        this.numbersGroup = numbersGroup;
        this.countStud = 0;
        this.students = []
    }

    AddStudent(obj){
        this.students.push(obj);
        this.countStud++;
    }

    ChangeNumbresGroup(num){
        this.numbersGroup = num;
    }

        getDev(){
        let count = 0;
        this.students.forEach(element => {
            if(element.number.charAt(1) == 3){
                count++;
            }
        });
        return count;
    }

    getGroup(group){
        this.students.forEach(element =>{
            if(element.group == group){
                console.log(element);
            }
        })
    }

}


const student1 = new Student("Dmitry", "Sokolov", "19991015", "Minsk", "FIT", 3, 10, "73201301");
const student2 = new Student("Anastasia", "Smirnova", "20001220", "Minsk", "FIT", 2, 10, "71202302");
const student3 = new Student("Maxim", "Kovalev", "19980530", "Minsk", "FIT", 1, 5, "71203303");

const fit = new Faculty("FIT", 10);

fit.AddStudent(student1);
fit.AddStudent(student2);
fit.AddStudent(student3);

console.log(fit)

fit.getGroup(10);

console.log(fit.getDev());


