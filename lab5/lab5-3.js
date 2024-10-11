let x = 0;
let y = 0;

function* moveObject(str) {

        switch (str) {
            case 'left':
                yield { x: --x, y };
                break;
            case 'right':
                yield { x: ++x, y };
                break;
            case 'up':
                yield { x, y: ++y };
                break;
            case 'down':
                yield { x, y: --y };
                break;
        }
}


for (let i = 0; i < 10; i++) {
    let str = prompt('right, left, up, down');
    const moveGen = moveObject(str);
    moveGen.next().value;
    console.log(`Step ${i + 1}: (${x}, ${y})`);
}



const keys = Object.keys(window);
console.log(keys);

window.alert = function() {
    console.log('Это новая реализация alert');
};


alert();