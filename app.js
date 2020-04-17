var container = document.getElementById("container");
var color = document.getElementById("color");
var submit = document.getElementById("submit");

submit.addEventListener("click", function(){
    if(color.value != ""){
        container.style.backgroundColor = color.value;
        error.innerHTML = ""
    }
})