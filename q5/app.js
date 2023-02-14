// let elem = document.querySelector("#elem")

let li = document.querySelector("#elem").children
console.log(li);

Array.from(li).forEach(item => {
    item.remove()
});

// function clear(elem) {
//     elem.remove();
//   }
//   clear(elem)