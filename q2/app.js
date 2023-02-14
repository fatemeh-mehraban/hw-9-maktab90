let listLi = document.querySelectorAll("a")
listLi.forEach(a => {
    let href = a.getAttribute("href")
    if(href.includes("://") && !href.includes("http://internal.com") ){
        a.style.color="orange"
    }
});