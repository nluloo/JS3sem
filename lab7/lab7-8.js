let car = {
    make: "audi",
    model: "80",
    year: 1990,
}


Object.defineProperties(car, {
    make: { writable: false, configurable: false },
    model: { writable: false, configurable: false },
    year: { writable: false, configurable: false }
});


car.make = "Ford";
car.model = "Focus";
car.year = 2022;

delete car.make;
delete car.model;
delete car.year;

console.log(Object.getOwnPropertyDescriptors(car));