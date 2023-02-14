let hover= document.querySelector(".hover-text-js")
let tooltip= document.querySelector(".tooltipjs")
hover.addEventListener("mouseover" , ()=>{
    tooltip.classList.add("active");
})
hover.addEventListener("mouseout" , ()=>{
    tooltip.classList.remove("active");
})