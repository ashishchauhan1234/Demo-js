//  DOM events
console.log("hello world");
let head = document.getElementById("heading")

head.addEventListener('click', function (e) {
    head.style.color = 'red'
    console.log("you have click the heading tag", e.target , e.offsetX , e.offsetY);
});
// offsetX ==> give the x distace from the tartget element to where we click 
// offsetY ==> give the y distace from the tartget element to where we click 

// head.addEventListener('mouseover', function(){
//     head.style.color = 'blue'
//     console.log("you have cli ck the heading tag");
// });
// head.addEventListener('mousedown', function(e){
//     head.style.color = 'yellow'
//     console.log("you have click the heading tag" , e.target);
// });

let btn = document.getElementById('btn')
btn.addEventListener('click',funct1);

function funct1(e) {
    console.log("Thanks", e);
    // we use e.preventDefault() function to stop the default action.
    // eg. if we click on submit btn then it goes to none.html but if we use this funcion then it does not refer to the next page.this function prohibit the submit button action.
}
document.addEventListener('mousemove', function(e){
    let x = e.offsetX;
    let y = e.offsetY;

    document.body.style.backgroundColor = `rgb(${x%255},${y%255},${(x+y)%255} )`;
})