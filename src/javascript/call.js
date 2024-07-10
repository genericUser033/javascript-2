function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
}

function Chicken(name, weight, legs) {
    Animal.call(this, name, weight) // bind object, properties want to bind, this is the Chicken's object
    this.legs = legs;
}

const hoai = new Chicken('Hoai', 45, 2);//this: hoai
console.log(hoai)

////////////////////////////////////////////////////////

function logger() {
    // const arr = Array.from(arguments)
    const arr = Array.call(this, arguments);
    console.log(arr)

    Array.prototype.forEach.call(arguments, item => console.log(item)) //set arguments as this inside forEach function
    Array.prototype.slice.call(arguments)
}

logger(1,2,3,4,5,6,7)

/////////////////////////////////////////////////////////

function Fish() {
    Animal.apply(this, arguments) // use arguments
}

const saba = new Fish('Fish', 45);//this: hoai
console.log(saba)