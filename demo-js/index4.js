// // // let d = document // document is not an array
// // // d = document.all;
// // // // d = document.body;
// // // // d = document.forms;

// // // // d.forEach(function(element){
// // // //     console.log(element);
// // // // });// ==> is show an error that d is not an array
// // // // // Array.from(d) ==>  conveert d in array

// // // Array.from(d).forEach(function(element){
// // //     console.log(element);
// // // });
// // // a = document.links //==> it gives the collections of links present in the page
// // // console.log(d);


// // // element selectors:
// // // there are two types of selectors :: single element selectors and multi element selectors

// // // single element selectors
// // let element = document.getElementById("first")

// // console.log(element);
// // console.log(element.childNodes); // gives element child class
// // console.log(element.parentNode); // gives element parent class
// // console.log(element.style.color = 'red');
// // element.innerText = 'ohh my god!!!';
// // element.innerHTML = `<h6>ashish chauhan</h6>`;

// // query selectors
// let sel = document.querySelector('#first'); //select element by id name
// sel = document.querySelector('.class'); //select element by class name
// sel = document.querySelector('h1'); //select element by tag name


// //2. MULTI ELEMENT SELECTORS
// let eles = document.getElementsByClassName('class');
// console.log(eles[0])
// Array.from(eles).forEach(function(element){
//     element.style.color = 'green';
// });


// // Creating element using js
// let element = document.createElement("li"); //create new html element

// element.className = "my_list"; // add clkass name to the new created element
// element.id = 'create_id'; // add id name to the new element
// element.setAttribute("title", "My_title"); // add other attributes to the new element
// element.innerText = 'Hello';

// let ul = document.querySelector('ul');
// ul.appendChild(element);
// console.log(element);


let head_ele = document.createElement("h1");
let txtNode = document.createTextNode("Go to Code with harry");

head_ele.className = 'head1';
head_ele.appendChild(txtNode);

let tag_ele = document.createElement("a");
tag_ele.setAttribute('href','https://www.codewithharry.com');
tag_ele.appendChild(head_ele);

let div = document.getElementById("my_div");
div.appendChild(tag_ele);