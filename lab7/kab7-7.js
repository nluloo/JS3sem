let circle = {

    _radius: 0,

    get square(){
        return 3.14 * this._radius ** 2;
    },
    set radius(value){
        this._radius = value;
    },
    get radius(){
        return this._radius;
    }
};


circle.radius = 10;
console.log(`Площадь круга: ${circle.square}`)