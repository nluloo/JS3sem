let studentsList = new Set();


function Add_Student(student){
    if(student.hasOwnProperty('numberGradeBook') && student.hasOwnProperty('groupID') && student.hasOwnProperty('name')){
        studentsList.add(student);
    }
    else{
        console.log("Ошибка в передаваемой структуре в функцию");
    }
}

Add_Student({numberGradeBook: 523263245, groupID: 10, name: "Сегренёв Кирилл Сергеевич"})
Add_Student({numberGradeBook: 123568591, groupID: 8, name: "Лужецкий Владислав Константинович"})
Add_Student({numberGradeBook: 102593425, groupID: 6, name: "Филипюк Илья Батькович"})


function Delete_Number_Student(numberBook){
    studentsList.forEach(element => {
        if(element.numberGradeBook === numberBook){
            studentsList.delete(element);
        }
    });
}

function Filt_Group(numberGroup){
    console.log("Студенты группы: " + numberGroup);
    studentsList.forEach(element => {
        if(element.groupID === numberGroup){
            console.log(element);
        }
    });
}

function sortStudentsByNumberGradeBook() {
    const sortedArray = Array.from(studentsList).sort((a, b) => a.numberGradeBook - b.numberGradeBook);
    return new Set(sortedArray);
}

Delete_Number_Student(123568591);


Filt_Group(10)

console.log(studentsList);
console.log("ОТСОРТИРОВАННЫЙ");

studentsList = sortStudentsByNumberGradeBook();
console.log(studentsList);









