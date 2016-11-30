// the 'gif'
function startRestaurant(){
  //this will stop the "gif"
  restaurant = document.getElementById('restaurant');
  restaurants = ['Joy', 'Sadness', 'Anger', 'Fear', 'Disgust'];

  //shuffle array

  //output array

  // use a while loop
  //set time out  
  
}

// stop the 'gif'
function getRestaurant(){

  // alert('get');
  // remember to read up on appendChild (what Tristan mentioned) and guide the students accordingly
}


function addRestaurantListener(){
  circle = document.getElementById('circle');
  circle.addEventListener("click", startRestaurant);

  // restaurant = document.getElementById('restaurant');
  // restaurant.addEventListener("click", startRestaurant)
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);