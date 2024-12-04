let Figure = {
    color: "",
    size: "",
}

let BigYellowSquare = {
    _proto_ : Figure,
}
BigYellowSquare.size = "big"
BigYellowSquare.color = "yellow"

let SmallYellowSquare = {
    _proto_ : Figure,
}
SmallYellowSquare.size = "small"
SmallYellowSquare.color = "yellow"


let BigCircle = {
    _proto_ : Figure
}
BigCircle.color = "none"
BigCircle.size = "big"

let GreenCircle = {
    _proto_ : Figure
}

GreenCircle.color = "green"
GreenCircle.size = "big"

let Triangle = {
    _proto_ : Figure,
    lines : 0
}

let OneLineTriangle ={
    _proto_ : Triangle
}

OneLineTriangle.color = "none"
OneLineTriangle.lines = 1
OneLineTriangle.size = "big"

let ThreeLineTriangle ={
    _proto_ : Triangle
}

ThreeLineTriangle.color = "none"
ThreeLineTriangle.lines = 3
ThreeLineTriangle.size = "big"

console.log(GreenCircle.color);
console.log(ThreeLineTriangle.lines);
console.log("color" in SmallYellowSquare);



