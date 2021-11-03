console.log("Welcome to Exercise 1");
let l = document.links;
Array.from(l).forEach(function(element){
    let str = element.toString()
    if(str.includes("javascript")){
        console.log(str); 
    }
});
// console.log(l)