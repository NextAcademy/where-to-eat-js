var myVar;

// http://www.w3schools.com/js/js_timing.asp
function startRandom() {
  myVar = setInterval(showRestaurant, 200);
  return myVar;
}

// Show a restaurant in random order
function showRestaurant(){

  restaurants = ['pedas', 'bens', 'nandos', 'zap fan'];
  colors = ['red', 'blue', 'green', 'black', 'cyan'];
  r = getRandomInt(0, restaurants.length);
  eat = document.getElementById("restaurant");    
  eat.innerHTML = restaurants[r];
  eat.style.color = colors[r];
}

// get a random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Get a restaurant
function getRestaurant(restaurant){
  clearInterval(myVar);
  eat = document.getElementById("restaurant");   
  console.log(eat);
}


function addRestaurantListener(){
  startBtn = document.getElementById('start-random-button');
  startBtn.addEventListener("click", startRandom)

  getBtn = document.getElementById('get-restaurant-button');
  getBtn.addEventListener("click", getRestaurant);
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);