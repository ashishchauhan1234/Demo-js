// // console.log("hello");
// // // variable types :
// // // 1. var
// // // 2. let
// // // 3. const
// // var var1 = 'hello', var2 = "var2", var3 = `var3`;
// // console.log(var1,var2,var3);
// // // Rule of variable name
// // /*1. cannot start with numbers
// // 2. can start with lewtter, numbers, or $,
// // 3. Are case sensitive */

// // // in const variable , we cannot update their values or redeclare their values.
// // /* const name = "ashish";
// // name = "asish chauhan" // cannot be done */
// // // in let variable , we can not change the datattype of the variable

// // /* var city = "meerut";

// // {
// //     let city = "delhi";
// //     console.log(city); ==> delhi
// // }
// // console.log(city); ==> meerut

// // */


// // /* Most comman Programming case type: ==> example
// // 1. camelCase ==> ashishChauhan
// // 2. kebab-case ==> ashish-Chauhan
// // 3. snake_case ==> ashish_Chauhan
// // 4. PascalCase ==> AshishChauhan
// // */


// // //      Data types
// // /* Data type in java scripts
// // 1. Primitive Data type : string, number,boolean,undefine, symbol, null
// // 2. Reference data type : user define datatypes : arrays, functons, dates, objects
// // */

// // // string data type
// // let name1 = "ashish";
// // console.log("name :: "+ name1);
// // console.log(typeof(name1));
// // let name2 = 12;
// // console.log("name :: "+ name2);
// // console.log(typeof(name2));
// // let name3 = true;
// // console.log("name :: "+ name3);
// // console.log(typeof(name3));
// // let name4;
// // console.log("name :: "+ name4);
// // console.log(typeof(name4));
// // let name5 = null;
// // console.log("name :: "+ name5);
// // console.log(typeof(name5));
// // let name6 = [1,2,"my",true];
// // console.log("name :: "+ name6);
// // console.log(typeof(name6));

// // let name7 = {harry: 87,
// // "ro han" : 82};
// // console.log("name :: "+ name7);
// // console.log(typeof(name7));

// // function funcName() {
    
// // };
// // console.log("name :: "+ funcName);
// // console.log(typeof funcName);


// // // TYPE CONVERSION AND TYPE COERCION
// // let my_var = 12;
// // console.log(my_var, typeof my_var)
// // my_var = String(12);
// // console.log(my_var, typeof my_var)

// // let var0 = 12
// // console.log(var0.toString()) // ==> give string


// // // TYPE COERCION
// // let var11 = '8675';
// // let var12 = 12;
// // console.log(var11 + var12); // it concatenate the number because one of the number is a string;




// // // STRING PROPERTIES:
// // /* 
// // 1. string concatenation :: by using (+) operator or concat function.
// // 2. string length :: by using .length function.
// // 3. lower case string :: by using .toLowerCase() function.
// // 4. upper case string :: by using .toUpperCase() function.
// // 5. getting character from string :: by using variable_name[index position] or using charAt()
// // 6. substring index: by using .indexOf('') function
// // * for geting the last index of substring we use .lastIndexOf("") function.
// // 7. string ends with given substring :: by using .endsWith("") function , it gives boolean values. 
// // 8. check wheather the given substring present in the substring or not:: by using include() function.
// // 9. get the substring from the string :: by using .substring() function.
// // 10. string slicing :: by using slice(starting index, end index, diffrence) function. * it accept negative indexing.
// // 11. string break:: by using .split(" ").

// // */ 
// // let str1 = 'good morning!! ';
// // let str2 = 'World';

// // // string concatinatons
// // console.log(str1 + str2)
// // // string length 
// // console.log(str1.length);
// // // string in lower case 
// // console.log(str1.toLowerCase())
// // // string in upperr case 
// // console.log(str1.toUpperCase())
// // // string slice
// // console.log(str1[3])
// // // finding the index of substring
// // console.log(str1.indexOf("o"))
// // console.log(str1.lastIndexOf("o"))
// // // using endsWith function
// // console.log(str1.endsWith("o"))
// // // check weather the given substring in the string or not
// // console.log(str1.includes("o"))
// // // getting the substring
// // console.log(str1.substring(1,4))
// // // string slicing
// // console.log(str1.slice(1,5,2))
// // // string break
// // console.log(str1.split(" "))
// // // replace sting
// // console.log(str1.replace('g', 'z'))


// // // script literals
// // let fruit1= 'orange';
// // let fruit2 = 'Mango';
// // let html = ` hey ${name1},
// //         do you like ${fruit1} or ${fruit2}
// // `;

// // document.body.innerHTML = html;


// // ARRAYS AND OBJECTS

// const marks = [54,56,87,98,78];
// const fruits = ['mango', 'apple','banana'];
// const mixed = ['str',54,'str2'];

// const arr = new Array(23,34,65,67,'amama');
// console.log(typeof arr);
// console.log(marks);
// console.log(typeof mixed);

// // FUNCTIONS


function greet(name){
    console.log(`Happy birthday ${name}`)
}
// anonymous functions
const greet2 = function(name){
    console.log(`Happy birthday ${name}`)
}
let name1 = 'amam';
let name2 = 'sheetal';
greet2(name1);
greet2(name2);