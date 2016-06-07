"use strict";

app.controller("WatchListCtrl", function($scope, DataFactory, AuthFactory) {

  $scope.movies = [];

  $scope.displayWatchList = function() {
    DataFactory.getWatchList().then(function(data) {
      $scope.movies = data;
      console.log($scope.movies);
    });
  };


  $scope.displayWatchList();

});
