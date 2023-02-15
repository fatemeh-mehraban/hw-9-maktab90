const numberBox = document.querySelectorAll(".bax-Counter")
let price = document.querySelectorAll(".price")
let vertical =  document.querySelectorAll(".vertical")
let article = document.querySelectorAll("article")
let section = document.querySelector(".row")
let SumTotalOfOrders =document.querySelector(".SumTotalOfOrders")
let finalService = document.querySelector(".Wage")
let boxPrice = document.querySelector(".price-box")
let code = document.querySelector(".code")
let offer = document.querySelector(".offer")
let ok = document.querySelector(".ok")
let Order = document.querySelector(".Order")
let input = document.querySelector(".input")
let Service
let x

 let foods =[
    {
    name: "همبرگر معمولی",
    price:25000,
    count : 0,
    total : 0,
    image :"bill-generator-js/img/hamburger.png",
    id:1
    },

{ 
    name:"همبرگر مخصوص",
    price:40000,
    count : 0,
    total : 0,
    image :"bill-generator-js/img/hamburger.png",
    id:2
    },

{ 
    name:"همبرگر مخصوص با قارچ",
    price:41000,
    count : 0,
    total : 0,
    image :"bill-generator-js/img/hamburger.png",
    id:3
   },
{
    name:"همبرگر معمولی با قارچ",
    price:30000,
    count : 0,
    total : 0,
    image :"bill-generator-js/img/hamburger.png",
    id:4
    },
{
    name:"سیب زمینی سرخ کرده",
    price:35000,
    count : 0,
    total : 0,
    image :"bill-generator-js/img/french_fries.png",
    id:5
},
{
    name:"سیب زمینی سرخ کرده ویژه",
    price:40000,
    count : 0,
    total : 0,
    image :"bill-generator-js/img/french_fries.png",
    id:6
},
{
    name:"نوشابه",
    price:4000,
    count : 0,
    total : 0,
    image :"bill-generator-js/img/soda.png",
    id:7
    },

 {
    name:"نوشابه رژیمی",
    price:3000,
    count : 0,
    total : 0,
    image :"bill-generator-js/img/soda.png",
    id:8
},
   
 {
    name:"سالاد سزار",
    price:30000,
    count : 0,
    total : 0,
    image :"bill-generator-js/img/ceasar.png",
    id:9
    },
{
    name:"سالاد فصل",
    price:30000,
    count : 0,
    total : 0,
    image :"bill-generator-js/img/ceasar.png",
    id:10
   }]




// ************ part add-minus number************

function render(arr) {
    section.innerHTML=""
    arr.forEach(element => {
        section.innerHTML += `
        <article id = "${element.id}" class="col-sm-11 col-lg-5 px-md-5 col-md-10 col-11 d-flex p-2 gap-1 bg-white my-2 rounded-3 article boxshadow" dir="rtl">
            <img src="${element.image}" alt="" class="w-25">
            <div class="w-75 info">
                <p class="namefood"> ${element.name}</p>
                <p class="vertical">${element.price}</p>
                <div class="d-flex justify-content-between f-z-span bax-Counter" >
                    <div class="text-center d-flex justify-content-between ">
                        <span class="bg-bac-brown margin-r-5px px-1 rounded-1 add" data-id="add"><img src="bill-generator-js/img/add.png" alt="" class="width-img "> </span>
                        <p class="mx-2"> ${element.count} </p>
                        <span class="bg-bac-brown px-1 rounded-1 minus" data-id="minus"> <img src="bill-generator-js/img/minus.png" alt="" class="width-img"> </span>
                    </div>
                    <span class="price"> ${element.total} </span>
                </div>
            </div>
        </article>`
    });
}
render(foods)
function clear(arr) {
    arr.forEach(element => {
        if (element.count !== 0) {
            SumTotalOfOrders.innerHTML = 0
            Service = 0
            finalService.innerHTML = 0
            element.total = 0
            element.count = 0
            render(foods)
        }
       });

}
section.addEventListener("click" , (e)=>{  
    if(e.target.closest("span").dataset.id == "add"){
               let foodId=e.target.closest(".article").id
            //    console.log(foodId);
               foods.forEach(element => {
                if (element.id == foodId) {
                    ++element.count
                    element.total = element.count * element.price
                }
               });
               render(foods)
            }
            if(e.target.closest("span").dataset.id == "minus" ){
                let foodId=e.target.closest(".article").id
                // console.log(foodId);
                foods.forEach(element => {
                 if (element.id == foodId && element.count !== 0) {
                     --element.count
                     element.total = element.count * element.price
                 }
                 

                });

                render(foods)
            }
            SumTotalOfOrders.innerHTML = foods.reduce((acc , elem) => acc + elem.total,0)
            Service = SumTotalOfOrders.innerHTML * 0.09
            finalService.innerHTML = Service
            offer.innerHTML =  Number(SumTotalOfOrders.innerHTML) + Number(finalService.innerHTML)
            // console.log(Service);
   
})
let oferobg={
    name:"gold",
    number:5
}

boxPrice.addEventListener("click",(e)=>{
    if( e.target.closest(".off").children[0].value !== oferobg.name) return
    if( e.target.closest(".off").children[0].value === oferobg.name){
        if(e.target.closest(".tik").id === "tik"){
            x = SumTotalOfOrders.innerHTML * (oferobg.number/100)
            code.innerHTML = oferobg.number 
            offer.innerHTML =  Number(SumTotalOfOrders.innerHTML) + Number(finalService.innerHTML) - x
        }
        
    }
    
    input.value = ""
})

ok.addEventListener("click",()=>{
    console.log(1);
    ok.closest(".modalbox").style.visibility = "hidden";
    x = 0
    clear(foods)
})
Order.addEventListener("click" , ()=>{
    ok.closest(".modalbox").style.visibility = "visible";
})



























// console.log(test);
// ************ end part add-minus number************



// function addMinus(e){

//     if(e.target.closest("span").dataset.id == "add"){
//         e.target.closest(".bax-Counter").children[0].children[1].innerHTML = +e.target.closest(".bax-Counter").children[0].children[1].innerHTML +1
//     }
//     if(e.target.closest("span").dataset.id == "minus"){
//         if(e.target.closest(".bax-Counter").children[0].children[1].innerHTML != 0){
//             e.target.closest(".bax-Counter").children[0].children[1].innerHTML = +e.target.closest(".bax-Counter").children[0].children[1].innerHTML -1
         
//         }  
//     }
//     if(Foodlist.foods.filter(item => item.name == e.target.closest(".article").dataset.name)){
//         objectfood = Foodlist.foods.filter(item => (item.name == e.target.closest(".article").dataset.name))[0]
//         objectfood.count = e.target.closest(".bax-Counter").children[0].children[1].innerHTML
//         objectfood.total = objectfood.price * objectfood.count
//         e.target.closest(".text-center").nextSibling.nextSibling.innerText = objectfood.total
//         SumTotalOfOrders.innerHTML= e.target.closest(".text-center").nextSibling.nextSibling.innerText
       
//     } 
//     finalt.push(e.target.closest(".text-center").nextSibling.nextSibling.innerText)

    
// } 
// addMinus(e)
 
 
