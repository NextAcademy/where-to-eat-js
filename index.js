var myVar;

// http://www.w3schools.com/js/js_timing.asp
function startRandom() {
  myVar = setInterval(showRestaurant, 200);
  return myVar;
}

// Show a restaurant in random order
function showRestaurant(){

  if (document.getElementById('message')) {
    m = document.getElementById('message');
    m.parentNode.removeChild(m);
  }

  restaurants = ['Pedas-Pedas', "Ben's", "Fish Head Noodles", 'Mixed Rice Stall', 'Nasi Kukus Stall'];
  colors = ['red', 'blue', 'green', 'black', 'cyan'];
  r = getRandomInt(0, restaurants.length);
  restaurant = document.getElementById("restaurant");    
  restaurant.innerHTML = restaurants[r];
  restaurant.style.color = colors[r];
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
  
  restaurant = document.getElementById("restaurant");   

  // create a h3 tag
  message = document.createElement('h3');
  // give it an ID
  message.setAttribute('id', 'message');

  // insert text inside the created h3 tag
  message.innerHTML = "Great, let's go to " + restaurant.innerHTML + "!";

  // put it after the "get a place" button
  //document.getElementsByClassName('center')[0].insertBefore(message, document.getElementById('get-restaurant-button').nextSibling);

  // check out the difference! :) 
  document.getElementsByClassName('center')[0].appendChild(message);
}

function addRestaurantListener(){
  startBtn = document.getElementById('start-random-button');
  startBtn.addEventListener("click", startRandom)

  getBtn = document.getElementById('get-restaurant-button');
  getBtn.addEventListener("click", getRestaurant);
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);