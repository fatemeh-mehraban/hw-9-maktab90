let ul = document.createElement("ul")
document.body.append(ul);

while (true) {
    let text = prompt("Enter the text for list item");
    if (!text) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = text;
    ul.append(li); 
  }