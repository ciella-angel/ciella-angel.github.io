/* .js files add interaction to your website */
let array = []; 
var textt = document.getElementById("guess");    
var button = document.getElementById("button");
if (button){
  button.addEventListener("click", myFunc); 
 } 

function myFunc(){
  var text = document.getElementById("input").value;
  textt.innerHTML = text + "  (your feedback was saved!)";
  array.push(text); 
  console.log(array); 
}

