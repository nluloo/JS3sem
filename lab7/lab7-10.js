let rectangle = {
    _width: 0,
    _height: 0,
    _square: 0,

    get square(){
        this._square = this._width * this._height;
        return this._square;
    },

    get width(){
        return this._width;
    },
    get height(){
        return this._height;
    },
    set width(value){
        if(value <= 0){
            throw new SyntaxError("Введено неправильное значение ширины")
        }
        this._width = value;
    },
    set height(value){
        if(value <= 0){
            throw new SyntaxError("Введено неправильное значение высоты")
        }
        this._height = value;
    }
}


try{
    rectangle.width = 20;
    rectangle.height = -20;
    console.log(rectangle.square);
}
catch(e){
    alert(e.message);
}