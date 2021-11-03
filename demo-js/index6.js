// console.log("Hello world tut6");


// // // Local storage and session storage

// // // for storing data into local storage we use .setItem() function. 
// // localStorage.setItem("name1", "chauhan");

// // // for storing data into local storage we use .getItem() function. 
// // let na = localStorage.getItem('name');
// // console.log(na)

// // // clearing perticular key
// // localStorage.removeItem('name1' );
// // na = localStorage.getItem('name1');
// // console.log(na)


// // // adding array into localStorage
// // let veg_arr = ['onion','carret','raddish'];
// // localStorage.setItem('veg',veg_arr);

// // let veg = localStorage.getItem('veg')
// // console.log(typeof veg, veg)

// // //  by appling this method it return the array in string not in array so for this we use JSON .stringify method.

// // // JSON.stringify() function convert the array into string form and to convert string into array we use JSON.parse() function. 
// // veg_arr = ['onion','carret','radish'];
// // localStorage.setItem('veg',JSON.stringify(veg_arr));

// // veg = JSON.parse(localStorage.getItem('veg'));
// // console.log(typeof veg, veg)

// // // If ewe store any data into our session storage then its data has been removed when ever you relauch you browser.

// // sessionStorage.setItem('sveg',JSON.stringify(veg_arr));

// // sveg = JSON.parse(sessionStorage.getItem('sveg'));
// // console.log(typeof sveg, sveg)



// // Date/ Time Objects in javascripts

// // let today = new Date(); 
// // console.log(today);
// // console.log(today.getTime());
// // console.log(today.getDay());
// // console.log(today.getHours());
// // console.log(today.getMinutes());
// // console.log(today.getSeconds());


// // OOPS CONCEPT

// // object literals
// let car = {
//     name: "Maruti 800",
//     topSpeed: 90,
//     run: function(){
//         console.log("Car is running");
//     }
// }
// console.log(car)
// car.run()

// // constructor()

// // creating constructors for cars
// function GeneralCar(givenName, givenSpeed){
//     this.name = givenName;
//     this.topSpeed = givenSpeed;
//     this.run = function(){
//         console.log(`${this.name} car is running at a speep of ${this.topSpeed}.`)
//     }
// }
// let car1 = new GeneralCar("honda",180);
// console.log(car1);
// car1.run();


// // Object Prototype

const proto = {
    slogan: function(){
        return ("this company is best.")
    },
    changeName: function(newName){
        this.name = newName
    }
}

const harry = Object.create(proto);
harry.name = 'harry';
harry.role = 'programmer';
console.log(harry); 


// create Employee Constructor
function Employee(name,salaray,experience){
    this.name = name;
    this.salaray = salaray;
    this.experience = experience;
}

Employee.prototype.slogan = function(){
    return `this company is the best , Regards, ${this.name}`;
}
let harry1 = new Employee("hariOm", 267573, 21);
console.log(harry1.slogan());

//  Applying Inheritance 
// creating constructors
function Programmer(name, salary, experience, language){
    // Inheritance call
    Employee.call(this, name, salary, experience);
    this.language = language;
}
// Inherit prototype
Programmer.prototype = Object.create(Employee.prototype);
// Manually set its constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer('Rohan', 10000, 10, "python");
console.log(rohan);