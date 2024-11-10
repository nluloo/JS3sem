let  user = {
    name: 'Masha',
    age: 21
};


let numbers = [1, 2, 3];

let user1 = {
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
};

let user2 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

const array = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]

let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: {
            maths: true,
            programming: false
        }
    }
};

let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { maths: true, mark: 8},
            { programming: true, mark: 4},
        ]
    }
};

let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Ivanov ',
		    degree: 'PhD'
		}
	     },
            { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Petrov',
		    degree: 'PhD'
		}
	     },
        ]
    }
};


let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Petrov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		}
	     },
            { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Ivanov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		}
	     },
        ]
    }
};


let store = {
    state:{
        profilePage:{
            posts:[
                {id:1, message: 'Hi', likesCount: 12},
                {id:2, message: 'By', likesCount: 1},
            ],
            newPostText: 'About me',
        },
        dialogsPage:{
            dialogs:[
                {id:1, name:'Valera'},
                {id:2, name:'Andrey'},
                {id:3, name:'Sasha'},
                {id:4, name:'Viktor'},
            ],
            messages:[
                {id: 1, message: 'hi'},
                {id: 2, message: 'hi hi'},
                {id: 3, message: 'hi hi hi'},
            ],
        },
        sidebar: [],
    },
};


/*function clone(obj) {
    
    if (obj === null || typeof obj !== "object") return obj;

    const result = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = clone(obj[key]);
        }
    }

    return result;
}*/

function clone(obj) {
    if (obj === null || typeof obj !== "object") return obj;

    if (Array.isArray(obj)) {
        return [...obj.map(item => clone(item))];
    }

    return {
        ...Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [key, clone(value)])
        )
    };
}


function changeMessage(obj) {

    if (typeof obj === 'object' && obj !== null) {
      if ('message' in obj) {
        obj.message = "hello";
      }
      for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          changeMessage(obj[key]);
        }
      }
    }
  }
  

let clonedUser = clone(user);
let clonedNumbers = clone(numbers);
let cloneUser1 = clone(user1);
let cloneUser2 = clone(user2);
let cloneArray = clone(array);
let cloneUser4 = clone(user4);
let cloneUser5 = clone(user5);
let cloneUser6 = clone(user6);
let cloneUser7 = clone(user7);
let cloneStore = clone(store);

cloneUser5.studies.department.group = 12;
cloneUser5.studies.exams[1].mark = 10;


cloneUser6.studies.exams[0].professor.name = "Anna Annovna";

cloneUser7.studies.exams[1].professor['articles'][1].pagesNumber = 3;

changeMessage(cloneStore);
console.log(1);
console.log(user);
console.log(2);
console.log(numbers);
console.log(3);
console.log(user1);
console.log(4);
console.log(user2);
console.log(5);
console.log(array);
console.log(6);
console.log(user4);
console.log(7);
console.log(user5);
console.log(8);
console.log(user6);
console.log(9);
console.log(user7);
console.log(10);
console.log(store);

console.log('------------COPY--------------')

console.log(1);
console.log(clonedUser);
console.log(2);
console.log(clonedNumbers);
console.log(3);
console.log(cloneUser1);
console.log(4);
console.log(cloneUser2);
console.log(5);
console.log(cloneArray);
console.log(6);
console.log(cloneUser4);
console.log(7);
console.log(cloneUser5);
console.log(8);
console.log(cloneUser6);
console.log(9);
console.log(cloneUser7);
console.log(10);
console.log(cloneStore);


