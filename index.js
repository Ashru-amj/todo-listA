const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write somwthings!")
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveDtata();
}

listContainer.addEventListener("click",function(e){
     if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDtata();
     }
     else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDtata();
     }
},false);

function saveDtata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showList();