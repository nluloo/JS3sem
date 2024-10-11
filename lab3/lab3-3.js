var students = [
    {name: 'Kirill', age: 19, group: 10},
    {name: 'Vlad', age: 19, group: 8},
    {name: 'Nastya', age: 40, group: 5},
    {name: 'Polina', age: 12, group: 5},
    {name: 'Matteu', age: 5, group: 4},
];

function RetObj(students) {
    var result = {};

    students.forEach(element => {
        if (element.age > 17) {
            if (result[element.group]) {
                result[element.group].push(element);
            } else {
                result[element.group] = [element];
            }
        }
    });
    return result;
}

console.log(RetObj(students));
