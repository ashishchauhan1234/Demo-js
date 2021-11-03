// by using ES6 object and inheritance

console.log("this is object and inheritace tut");

class Employee {
    constructor(givenName, givenExperience, givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this company is best`;
    }
    
    joiningYear(){
        return 2021 - this.experience;
    }
    // static function are used without creating object of class;
    static add(a,b){
        return(a+b);
    }
}

// inheted Employee class into Programmer class
class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language){
        super(givenName,givenExperience,givenDivision); //It call inheireted class constructor.
        this.language = language;
    }
    favoraiteLanguage(){
        if (this.language =='python'){
            return 'python';
        }
        else{
            return 'javascript';
        }
    }
    static mul(a,b){
        return a*b;
    }
}
// let harry = new Employee("amam", 34,'first');
// console.log(harry.joiningYear());
// console.log(Employee.add(5,9));

let rohan = new Programmer('Rohan', 23, "first","python");
console.log(rohan);
console.log(rohan.favoraiteLanguage());
console.log(Programmer.mul(5,9));