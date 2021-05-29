// creating an empty shopping list to be filled by our inputs
const ShoppingList = [];

// defining our documents elements
const input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const shoppingListContainer = document.getElementById("shopping-list-container");

// This function will create a list of inputs with a remove button
function updateDom() {
    shoppingListContainer.innerHTML = "";
    for (var idx = 0; idx < ShoppingList.length; ++idx) {
        // we create a list and give it the id same as the system
      const liElement = document.createElement("li");
      liElement.innerText = ShoppingList[idx];
      liElement.id = idx;
  
      // We create a Remove button for each element
      const liButton = document.createElement("button");
      liButton.innerText = "Remove";
      liButton.addEventListener("click", deleteLiElement);
      // where we add the button to the element
      liElement.appendChild(liButton);
  
      // adding our element to the shopping list container
      shoppingListContainer.appendChild(liElement)
      // reset after input
      input.value = "";
    }
  }

  function deleteLiElement(e) {
    const parentElement = e.target.parentElement;
    shoppingListContainer.removeChild(parentElement)
    const parentElementId = parseInt(parentElement.id);
    ShoppingList.splice(parentElementId, 1);
    updateDom()
  }


//  The following function adds our list 
  function addShopping() {
    ShoppingList.push(input.value)
    updateDom()
  }
  
  
  addBtn.addEventListener("click", addShopping)
  