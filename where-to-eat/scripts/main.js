(function () {

/**
 * Variables
 */
var projectname = '/Dashi';
var user_id     = '1111';
var lng         = -122.08;
var lat         = 37.38;

/**
 * Initialize
 */
function init() {
  // Register event listeners
  document.getElementById('nearby-btn').addEventListener('click', loadNearbyRestaurants);
  document.getElementById('fav-btn').addEventListener('click', loadFavoriteRestaurants);
  document.getElementById('recommend-btn').addEventListener('click', loadRecommendedRestaurants);
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onPositionUpdated, onLoadPositionFailed, {maximumAge: 60000});
    showLoadingMessage('Retrieving your location...');
  } else {
    onLoadPositionFailed();
  }
}

function onPositionUpdated(position) {
  lat = position.coords.latitude;
  lng = position.coords.longitude;

  loadNearbyRestaurants();
}

function onLoadPositionFailed() {
  console.warn('navigator.geolocation is not available');
  loadNearbyRestaurants();
}

// -----------------------------------
//  Helper Functions
// -----------------------------------

/**
 * A helper function that makes a navigation button active
 * 
 * @param btnId - The id of the navigation button
 */
function activeBtn(btnId) {
  var btns = document.getElementsByClassName('main-nav-btn');

  // deactivate all navigation buttons
  for (var i = 0; i < btns.length; i++) {
    btns[i].className = btns[i].className.replace(/\bactive\b/, '');
  }
  
  // active the one that has id = btnId
  var btn = document.getElementById(btnId);
  btn.className += ' active';
}

function showLoadingMessage(msg) {
  var restaurantList = document.getElementsByClassName('restaurant-list')[0];
  restaurantList.innerHTML = '<p class="notice"><i class="fa fa-spinner fa-spin"></i> ' + msg + '</p>';
}

function showWarningMessage(msg) {
  var restaurantList = document.getElementsByClassName('restaurant-list')[0];
  restaurantList.innerHTML = '<p class="notice"><i class="fa fa-exclamation-triangle"></i> ' + msg + '</p>';
}

function showErrorMessage(msg) {
  var restaurantList = document.getElementsByClassName('restaurant-list')[0];
  restaurantList.innerHTML = '<p class="notice"><i class="fa fa-exclamation-circle"></i> ' + msg + '</p>';
}

/**
 * A helper function that creates a DOM element <tag options...>
 * 
 * @param tag
 * @param options
 * @returns
 */
function $(tag, options) {
  var element = document.createElement(tag);

  for (var option in options) {
    if (options.hasOwnProperty(option)) {
      element[option] = options[option];
    }
  }

  return element;
}

/**
 * AJAX helper
 * 
 * @param method - GET|POST|PUT|DELETE
 * @param url - API end point
 * @param callback - This the successful callback
 * @param errorHandler - This is the failed callback
 */
function ajax(method, url, data, callback, errorHandler) {
  var xhr = new XMLHttpRequest();

  xhr.open(method, url, true);

  xhr.onload = function () {
    if (xhr.status == 200) {
      callback(xhr.responseText);
    }
  };

  xhr.onerror = function () {
    console.error("The request couldn't be completed.");
    errorHandler();
  };

  if (data === null) {
    xhr.send();
  } else {
    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    xhr.send(data);
  }
}

// -------------------------------------
//  AJAX call server-side APIs
// -------------------------------------

/**
 * API #1
 * Load the nearby restaurants
 * API end point: [GET] /Dashi/restaurants?user_id=1111&lat=37.38&lon=-122.08
 */
function loadNearbyRestaurants() {
  console.log("loadNearbyRestaurants");
  activeBtn('nearby-btn');

  // The request parameters
  var url = projectname + '/restaurants';
  var params = 'user_id=' + user_id + '&lat=' + lat + '&lon=' + lng;
  var req = JSON.stringify({});
  
  // display loading message
  showLoadingMessage('Loading nearby restaurants...');
  
  // make AJAX call
  ajax('GET', url + '?' + params, req, 
    // successful callback
    function (res) {
      var restaurants = JSON.parse(res);
      if (!restaurants || restaurants.length === 0) {
        showWarningMessage('No nearby restaurant.');
      } else {
        listRestaurants(restaurants);
      }
    },
    // failed callback
    function () {
      showErrorMessage('Cannot load nearby restaurants.');
    }  
  );
}

/**
 * API #2
 * Load favorite (or visited) restaurants
 * API end point: [GET] /Dashi/history?user_id=1111
 */
function loadFavoriteRestaurants() {
  activeBtn('fav-btn');

  // The request parameters
  var url = projectname + '/history';
  var params = 'user_id=' + user_id;
  var req = JSON.stringify({});
  
  // display loading message
  showLoadingMessage('Loading favorite restaurants...');

  // make AJAX call
  ajax('GET', url + '?' + params, req, 
    function (res) {
      var restaurants = JSON.parse(res);
      if (!restaurants || restaurants.length === 0) {
        showWarningMessage('No favorite restaurant.');
      } else {
        listRestaurants(restaurants);
      }
    },
    function () {
      showErrorMessage('Cannot load favorite restaurants.');
    }  
  );
}

/**
 * API #3
 * Load recommended restaurants
 * API end point: [GET] /Dashi/recommendation?user_id=1111
 */
function loadRecommendedRestaurants() {
  activeBtn('recommend-btn');

  // The request parameters
  var url = projectname + '/recommendation';
  var params = 'user_id=' + user_id;
  var req = JSON.stringify({});
  
  // display loading message
  showLoadingMessage('Loading recommended restaurants...');

  // make AJAX call
  ajax('GET', url + '?' + params, req,
    // successful callback
    function (res) {
      var restaurants = JSON.parse(res);
      if (!restaurants || restaurants.length === 0) {
        showWarningMessage('No recommended restaurant. Make sure you have favorites.');
      } else {
        listRestaurants(restaurants);
      }
    },
    // failed callback
    function () {
      showErrorMessage('Cannot load recommended restaurants.');
    } 
  );
}

/**
 * API #4
 * Toggle favorite (or visited) restaurants
 * 
 * @param business_id - The restaurant business id
 * 
 * API end point: [POST]/[DELETE] /Dashi/history
 * request json data: { user_id: 1111, visited: [a_list_of_business_ids] }
 */
function changeFavoriteRestaurant(business_id) {
  // Check whether this restaurant has been visited or not
  var li = document.getElementById('restaurant-' + business_id);
  var favIcon = document.getElementById('fav-icon-' + business_id);
  var isVisited = li.dataset.visited !== "true";
  
  // The request parameters
  var url = projectname + '/history';
  var req = JSON.stringify({
    user_id: user_id,
    visited: [business_id]
  });
  var method = isVisited ? 'POST' : 'DELETE';

  ajax(method, url, req,
    // successful callback
    function (res) {
      var result = JSON.parse(res);
      if (result.status === 'OK') {
        li.dataset.visited = isVisited;
        favIcon.className = isVisited ? 'fa fa-heart' : 'fa fa-heart-o';
      }
    }
  );
}

// -------------------------------------
//  Create restaurant list
// -------------------------------------

/**
 * List restaurants
 * 
 * @param restaurants - An array of restaurant JSON objects
 */
function listRestaurants(restaurants) {
  // Clear the current results
  var restaurantList = document.getElementsByClassName('restaurant-list')[0];
  restaurantList.innerHTML = '';

  for (var i = 0; i < restaurants.length; i++) {
    addRestaurant(restaurantList, restaurants[i]);
  }
}

/**
 * Add restaurant to the list
 * 
 * @param restaurantList - The <ul class="restaurant-list"> tag
 * @param restaurant - The restaurant data (JSON object)
 */
function addRestaurant(restaurantList, restaurant) {
  var business_id = restaurant.business_id;
  
  // create the <li> tag and specify the id and class attributes
  var li = $('li', {
    id: 'restaurant-' + business_id,
    className: 'restaurant'
  });
  
  // set the data attribute
  li.dataset.business = business_id;
  li.dataset.visited = restaurant.is_visited;

  // restaurant image
  li.appendChild($('img', {src: restaurant.image_url}));

  // section
  var section = $('div');
  
  // title
  var title = $('a', {href: restaurant.url, target: '_blank', className: 'restaurant-name'});
  title.innerHTML = restaurant.name;
  section.appendChild(title);
  
  // category
  var category = $('p', {className: 'restaurant-category'});
  category.innerHTML = 'Category: ' + restaurant.categories.join(', ');
  section.appendChild(category);
  
  // stars
  var stars = $('div', {className: 'stars'});
  for (var i = 0; i < restaurant.stars; i++) {
    var star = $('i', {className: 'fa fa-star'});
    stars.appendChild(star);
  }

  if (('' + restaurant.stars).match(/\.5$/)) {
    stars.appendChild($('i', {className: 'fa fa-star-half-o'}));
  }

  section.appendChild(stars);

  li.appendChild(section);

  // address
  var address = $('p', {className: 'restaurant-address'});
  
  address.innerHTML = restaurant.full_address.replace(/,/g, '<br/>');
  li.appendChild(address);

  // favorite link
  var favLink = $('p', {className: 'fav-link'});
  
  favLink.onclick = function () {
    changeFavoriteRestaurant(business_id);
  };
  
  favLink.appendChild($('i', {
    id: 'fav-icon-' + business_id,
    className: restaurant.is_visited ? 'fa fa-heart' : 'fa fa-heart-o'
  }));
  
  li.appendChild(favLink);

  restaurantList.appendChild(li);
}

init();

})();

// END
