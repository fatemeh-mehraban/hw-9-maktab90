let button = document.getElementById("hider")
let txt = document.getElementById("text")

button.addEventListener("click",()=>{
    txt.hidden = true
    setTimeout(() => {
        button.hidden = true
    }, 1000);
} )