/*

//Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

//Calculating a value 
function square(number) {
    return number * number;
}



console.log(square(5));


// arithmetic operators 
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//assignment operators 
let z = 10;

z++;
z = 10 +1;

z += 5;
z = z + 5;

//comparison operator 

//relational operators 
let c = 1;
console.log(c > 0);
console.log(c >= 1);
console.log(c < 1);
console.log(c <= 1);

// Equality 

//strict equalitt operator (same type + value)
console.log( c === 1);
console.log( '1' === 1);

//lose equality operator 
console.log( c == 1);
console.log('1' == 1);
console.log(c !== 1);

//tenary operators 
let points = 102;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);


//logical AND (&&) 
//returns true if both operands are true

//logical OR (||)
//returns TRUE if one of the operands is TRUE 

//NOT (!)

//Falsy - undefinded, null, 0, false, '', NaN

//truthy - anything that's not falsy

//short circuiting returning the first truthy operator

let a = 'red';
let b = 'blue'; 



// 2 types of conditional statements if and else 

if (condition) {
    statement // <- block of code
}
else if (anotherCondition) 
{
    statement 
}   
else 
statement 



let hour = 19
;

if (hour >= 6 && hour < 12) 
    console.log('Good Morning');
else if (hour >= 12 && hour < 18)
    console.log('Good Evening');
else 
    console.log('Good Afternoon');




    //switch and case 


    let role = 'guest'; 

    switch(role) {
        case 'guest': 
        console.log('Guest User');
        break;

        case 'moderator': 
        console.log('Moderator User');
        break;

        default: 
        console.log('Unknown User');
    }


    //for loop/while loop 


    for(let i = 0; i <= 5; i++) {
        if (i % 2 !== 0) console.log(i);
    } 


    let i = 0;
    while (i <= 5) {
        if (i % 2 !== 0) console.log(i);
        i++;
    }
   

    //do while loop 
    
    let i = 0;
    do {
         (i <= 5) 
            if (i % 2 !== 0) console.log(i);
            i++;
    } while (i <= 5);
      

    let i = 0; 
    while (i < 5) {
        console.log(i);
        i++;
        break;

    }
    
 

    //for in loop 

    const person = {
        name: 'Kacper',
        age: 32
    }; 

    for (let key in person)
        console.log(key, person[key]);

    //Dot notation 
    person.name 

    //bracket Notation 
    person['name']

  



    function max(a, b)
    { 
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
} 

max(20, 55);

function max(a, b) {
if (a > b) return;
return b;

(a > b) ? a : b
}




function isLandscape(width, heigth) {
   if (width > height) 
    return true;
   else {
    return false;
}
}


let width = 600;
let height = 900;

console.log(isLandscape(600, 900));



//sped limit = 70 
// 5 -> 1 point 
//Math.floor(1.3)
// 12 points -> suspended 

console.log(checkSpeed(180)); 

function checkSpeed(speed) {
    if (speed < 70) { 
        return ('Ok');
       }  else if (speed > 135)
        return ('License Suspended');

       
       else if (speed > 130) {
        return ('12 point');
       } else if (speed > 125) {
        return ('11 point');
    }  else if (speed > 120) {
        return ('10 point');
    } else if (speed > 115) {
        return ('9 point');
    } else if (speed > 110) {
        return ('8 point');
    } else if (speed > 105) {
        return ('7 point');
    }  else if (speed > 100) {
        return ('6 point');
       } else if (speed > 95) {
        return ('5 point');
    }  else if (speed > 90) {
        return ('4 point');
    } else if (speed > 85) {
        return ('3 point');
    } else if (speed >80) {
        return ('2 point');
    } else if (speed > 75) {
        return ('1 point');
    } 
    
}


showNumbers(10); 

function showNumbers(limit) {
    for(let limit = 0; limit <= 10; limit++)
        (limit % 2 !== 0) console.log('ODD'); {
        
    } else {
        console.log('EVEN')
    }

}

41.14. exercise odd and even numbers 

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 !== 0) {
            console.log(i + ' ODD');
        } else {
            console.log(i + ' EVEN');
        }
    }
}

showNumbers(10);

42.15 exercise count truthy 


const array = [0, null, undefined, 2, 3]

function countTruthy(array) {


}


const arr = [1,2,5,6,7,,,null];

function countTruthy(arr) {
    let count = 0;
    for (let element of arr) {
        if (element) {  // This checks if the element is truthy
            count++;
        }
    }
    return count;
}
console.log(countTruthy(arr));

48.1 Basics - Objects 


//Object oriented programmig (OOP)

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() { // method
        console.log('draw');
    }
};

circle.draw(); 



let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}




let counter = 0;

while (true) {
    console.log("Loop iteration:", counter);
    counter++;

    // This condition simulates an open loop with a delayed or missing exit
    if (counter > 5 && Math.random() > 0.95) {
        console.log("Breaking out of the loop!");
        break;  // Breaking out of the loop at a random point
    }

    console.log("Loop iteration:", counter);

    // Caution: Without the `break`, this loop would run indefinitely!
}



//49.2 factory functions

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() { // method
        console.log('draw');
    }
};

circle.draw(); 


//49.2 factory functions

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(6);
console.log(circle1);

const circle2 = createCircle(3);
console.log(circle2);

// 50.3 constructor function 

//Pascal Notation: OneTwoThreeFour - use when using constructor function

//Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}



// Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

Circle.call({}, 1);
Circle.apply({},[1,2,3]);
const another = new Circle(1);

//51.4 Dynamic Nature of Objects 

// 53.6 Functions are Objects 

// Value type = Number, String, Boolean, Symbol, undefined, null aka Primitives are copied by their value 
// Reference Types = Object, Function, Array = are copied by their reference 



let obj = {value: 110};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);



// 55.8 Enumerating Properties of an Object

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
    console.log(key, circle[key]);

for (let key of Object.keys(circle))
    console.log(key);

for (let entry of Object.entries(circle))
    console.log(entry);

if ('color' in circle) console.log('yes');



// Cloning an Object 


const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

//const another = {};
//for (let key in circle)
    //another[key] = circle[key];

const another = Object.assign({
    color: 'yellow'
}. circle);

console.log(another);



// 57.10 Garbage Collector

// 58. 11 atH 

// 59. 12 String 

//String primitive
//const message = 'This is first message ';

// String object 

// 60.13 Template Literals 


// 60.14 Date object 



//62.15 Exercise 1 Address Object
//street
//city
//zipCode
// show Address(adress)

const address = {
    street: 'strasse',
    city: 'berlin',
    zipCode: '123'
    };

    function showAdress(address) {
        for (let key in address)
            console.log(key, address[key]);
    }

showAdress(address);



// 63.16 Factory and Constructor Function 

let address = new Address('a', 'b', 'c');

console.log(address);

//factory function 

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode 
    };
}

// constructor function 
function Address(street, city, zipCode) {
this.street = street;
this.city = city;
this.zipCode = zipCode;
}


// 68.1 Arrays introduction  - adding new elements, finding elements, removing elements, splitting arrays, combining arrays

const numbers = [3,4];

//End

numbers.push(5,6);



//Beginning 
numbers.unshift(1, 2);

//middle  
numbers.splice(2, 0, 'a', 'b');


console.log(numbers);

// 79,3 finding elemnts 

const numbers = [1, 2, 3, 4,];

console.log(numbers.indexOf('1'));

// finding elements (reference types)

const courses = [
    {}
]

//91.1 Function Declaration vs Expression

//Function Declaration
function walk() {
    console.log('walk');
}

// Function Expression
let run = function() {}

// hoisting is a process of moving function declaration to the top of the file 

//95.5 default parameters 

function interest(principal, rate, years) {
    return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5));

// 96.6 Getters and Setters 

//getters => access properties 
// setters => change (mutate) 

const person = {
    firstName: 'Kacper',
    lastName: 'Karpowicz',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string') return;
        throw new Error('Value is not a string');
        
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'John Smith';

console.log(person);

//97.7 Try and Catch 

//defensive programming ->
//throw an exeption 

//98.8 Local vs Global Scope 

const color = 'red';

function start() {
    const message = 'hi';
    console.log(red);
    console.log(message);
}

console.log(color);

// 99.9 Let vs Var 

//var create function scope variables 
// es6 (es2015): let, const => block-scoped

function start() {
    for (var i = 0; i < 5; i++)
    console.log(i);
}

start();

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag) {
            console.log(self.title, tag);
        });
    }
};

video.showTags();
*/ 

// console.log(sum([1,2,3,4]));

// function sum(...items) {
//     if (items.length === 1 && Array.isArray(items[0]))
//         items = [...items[0]];

//     return items.reduce((a, b) => a + b);
// }


const mystery = ''; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE



// LEAVE THIS CODE ALONE! (pretty please)
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}

