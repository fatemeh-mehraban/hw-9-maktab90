const numberBox = document.querySelectorAll(".bax-Counter")
let price = document.querySelectorAll(".price")
let vertical =  document.querySelectorAll(".vertical")
let article = document.querySelectorAll("article")
let section = document.querySelector(".row")
let SumTotalOfOrders =document.querySelector(".SumTotalOfOrders")
let Foodlist={
 foods :[
    {
    name:NormalHamburger,
    price:10000,
    count:0,
    total: this.price + this.count,
},

{
    name:SpecialHamburger,
    price:20000,
    count:0,
    total: this.price + this.count,
},

{
    name:SpecialHamburgerMushrooms,
    price:40000,
    count:0,
    total: this.price + this.count,
},
{
    name:NormalHamburgerMushrooms,
    price:30000,
    count:0,
    total: this.price + this.count,
},
{
    name:FrenchFries,
    price:50000,
    count:0,
    total: this.price + this.count,
},
{
    name:FrenchFries,
    price:60000,
    count:0,
    total: this.price + this.count,
},
 {
    name:Soda,
    price:4000,
    count:0,
    total: this.price + this.count,
},

 {
    name:DietSoda,
    price:3000,
    count:0,
    total: this.price + this.count,
},
 {
    name:CaesarSalad,
    price:3000,
    count:0,
    total: this.price + this.count,
},
{
    name:ChickenSalad,
    price:3000,
    count:0,
    total: this.price + this.count,
}],
totalprice(){
this.foods.reduce(total)
}
}
console.log(Foodlist.totalprice);
// ************ part add-minus number************


section.addEventListener("click" , (e)=>{   
        function addMinus(e){

        if(e.target.closest("span").dataset.id == "add"){
            e.target.closest(".bax-Counter").children[0].children[1].innerHTML = +e.target.closest(".bax-Counter").children[0].children[1].innerHTML +1
        }
        if(e.target.closest("span").dataset.id == "minus"){
            if(e.target.closest(".bax-Counter").children[0].children[1].innerHTML != 0){
                e.target.closest(".bax-Counter").children[0].children[1].innerHTML = +e.target.closest(".bax-Counter").children[0].children[1].innerHTML -1
            }  
        }
        // e.target.closest(".text-center").nextSibling.nextSibling.innerText  = e.target.closest(".bax-Counter").children[0].children[1].innerText * e.target.closest(".text-center").nextSibling.nextSibling.dataset.price
    }

    addMinus(e)
   
   
})
// ************ end part add-minus number************




 
 
