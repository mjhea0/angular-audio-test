// sample angular code

var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  var audio = document.createElement('audio');
  audio.src = "http://www.amclassical.com/mp3/amclassical_beethoven_fur_elise.mp3";
  $scope.play = function() {
    audio.play();
  };
});
