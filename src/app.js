// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.getElementById("cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";    
  } else {
    cheese.style.display = "none";
  } 
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.getElementById("tomato");
  if (state.Tomatoes) {
    tomato.style.display = "inherit";    
  } else {
    tomato.style.display = "none";
  } 
}


function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.getElementById("onion");
  if (state.Onions) {
    onion.style.display = "inherit";    
  } else {
    onion.style.display = "none";
  } 
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById("lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";    
  } else {
    lettuce.style.display = "none";
  } 
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};


//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  const ingredientsList = ["Cheese","Onions","Tomatoes", "Lettuce", "Patty"];

  ingredientsList.forEach((ingredient) => {
    const buttonClass = `.btn-${ingredient.toLowerCase()}`;
    const stateActive = state[ingredient];

    const buttonElement = document.querySelector(buttonClass);
    buttonElement.classList.toggle('active', stateActive);
  });
}
//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() {
  let ingredientElements = document.querySelectorAll(".items");
  ingredientElements.forEach(function(element){
   let ingredientName = element.textContent.trim();
   if (!state[ingredientName]) {
    element.style.display = "none";
   } else {
    element.style.display = "block";
   }
  });
 }
//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice () {
  let totalPrice = wholeWheatBun;
  for (let ingredient in state) {
    if (state[ingredient]) {
      totalPrice = totalPrice + ingredients[ingredient];
    }
  }
  let priceDetails = document.querySelector(".price-details");
  priceDetails.textContent = "INR" + totalPrice;
}
for (let ingredient in state) {
  let selectedButton = ".btn-" + ingredient.toLowerCase();
  document.querySelector(selectedButton).onclick = function () {
    state[ingredient] = !state[ingredient];
    renderAll();
  }
}



renderAll();