var app = angular.module('demo', ['ngResource']);


app.factory('Restaurant', function($resource) {
  return $resource('/api/restaurant/:id', {id: '@id'});
});


app.controller('Root', function($scope, Restaurant) {

  $scope.restaurants = Restaurant.query();


  $scope.add = function(item) {
    var restaurant = new Restaurant(item);

    // add to local collection
    $scope.restaurants.push(restaurant);

    // add to the backend storage
    restaurant.$save();

    // clear the input
    item.name = '';
  };


  $scope.remove = function(restaurant) {
    // remove from local collection
    $scope.restaurants.splice($scope.restaurants.indexOf(restaurant), 1);

    // remove from the backend storage
    restaurant.$remove();
  };
});
