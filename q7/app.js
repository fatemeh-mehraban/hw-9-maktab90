var span = document.querySelector(".caret");


span.addEventListener("click", function(e) {
    e.target.parentElement.querySelector(".nested").classList.toggle("active");
  });
