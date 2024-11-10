let store = {
    state : { // 1
        profilePage:{ // 2
            posts: [ // 3
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'By', likesCount: 1},
            ],
            newPostText: "About me",
        },
        dialogsPage:{
            dialogs: [
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Viktor'},
            ],
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'hi hi'},
                {id: 3, message: 'hi hi hi'},
            ],
        },
        sedebar: [],
    },
}

function printLikes(posts){
    console.log("Лайки: ");
    for(let i = 0; i < posts.length; i++){
        console.log(posts[i].likesCount);
    }
}

function filtrDia(dialogs){
    console.log("Пользователи с четным id: ")
    for(let i = 0; i < dialogs.length; i++){
        if(dialogs[i].id % 2 == 0){
            console.log(dialogs[i]);
        }
    }
}

const {state :{profilePage : { posts}}} = store

printLikes(posts);

const {state : {dialogsPage : {dialogs, messages}}} = store


messages.map(messages => messages.message = "Hello, World!");

console.log(messages);

filtrDia(dialogs);


console.log(posts);