let listul = document.getElementById("container")
let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },

    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
  };



  function createTree(container, obj) {
    container.innerHTML = createTreeText(obj);
  }

  

  function createTreeText(obj) {
    let li ="";
    let ul= "";
    for (let key in obj) {
      li += `<li> ${key} ${createTreeText(obj[key])} </li>`;
    }
    if (li) {
      ul = `<ul> ${li} </ul>`
    }
    return ul;
  }

  createTree(listul, data);